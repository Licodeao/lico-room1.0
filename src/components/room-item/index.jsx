import React, { memo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { RoomItemWrapper } from './style'
import { Rating, Skeleton } from "@mui/material"
import { Carousel } from 'antd'
import IconArrowLeft from '@/assets/svg/arrowLeft'
import IconArrowRight from '@/assets/svg/arrowRight'
import Indicator from '@/baseUI/indicator'
import classNames from 'classnames'
import { shallowEqual, useSelector } from 'react-redux'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%", itemClick } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const sliderRef = useRef()
  const { isLoading } = useSelector((state) => ({
    isLoading: state.main.isLoading
  }), shallowEqual)

  function controlClickHandle(isRight = true, event) {
    isRight ? sliderRef.current.next() : sliderRef.current.prev()

    let newIndex = isRight ? selectedIndex + 1 : selectedIndex - 1
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0
    setSelectedIndex(newIndex)

    event.stopPropagation()
  }

  const pictureElement = (
    <div className='cover'>
      <img src={itemData.picture_url} alt="" />
    </div> 
  )

  const silderElement = (
    <div className='slider'>
      <div className='control'>
        <div className='btn left' onClick={e => controlClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30"/>
        </div>
        <div className='btn right' onClick={e => controlClickHandle(true, e)}>
          <IconArrowRight width="30" height="30"/>
        </div>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {
          itemData?.picture_urls?.map(item => {
            return (
              <div className='cover' key={item}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
      <div className='indicator'>
        <Indicator selectedIndex={selectedIndex}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div className='dot-item' key={item}>
                  <span className={classNames('dot', { active: selectedIndex === index })}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
    </div>
  )

  function itemClickHandle() {
    if (itemClick) itemClick(itemData)
  }

  return (
    <RoomItemWrapper 
      verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      itemWidth={itemWidth}
      onClick={itemClickHandle}
    >
      <div className='inner'>
        { 
          isLoading ? (
            <Skeleton variant='rounded' width="100%" animation="wave" />
          ) : ( 
            !itemData.picture_urls ? pictureElement : silderElement
          )  
        }
        <div className='desc'>
          {itemData.verify_info.messages.join(' · ')}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>￥{itemData.price}/晚</div>
        <div className='bottom'>
          <Rating
            readOnly
            value={itemData.star_rating ?? 5}
            precision={0.1}
            sx={{ fontSize: "12px", color: "#00848A" }}
          />
          <span className='count'>{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra'> · {itemData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem