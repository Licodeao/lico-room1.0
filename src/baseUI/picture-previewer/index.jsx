import IconArrowLeft from '@/assets/svg/arrowLeft'
import IconArrowRight from '@/assets/svg/arrowRight'
import CloseButtonSvg from '@/assets/svg/closeBtn'
import TriangleArrowSvg from '@/assets/svg/triangleArrow'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { PicturePreviewerWrapper } from './style'
import Indicator from '../indicator/index'
import classNames from 'classnames'
import TriangleArrowTop from '@/assets/svg/triangleArrowTop'

const PicturePreviewer = memo((props) => {
  const { pictureUrls = [], closeClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)
  const [showList, setShowList] = useState(true)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  function closeBtnClickHandle() {
    if (closeClick) closeClick()
  }

  function controlClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex > pictureUrls.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }

  function bottomItemClickHandle(index) {
    setCurrentIndex(index)
    setIsNext(index > currentIndex)
  }

  return (
    <PicturePreviewerWrapper isNext={isNext} showList={showList}>
      <div className='top'>
        <div className='close-btn' onClick={closeBtnClickHandle}>
          <CloseButtonSvg/>
        </div>
      </div>
      <div className='slider'>
        <div className='control'>
          <div className='btn left' onClick={e => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77"/>
          </div>
          <div className='btn right' onClick={e => controlClickHandle(true)}>
            <IconArrowRight width="77" height="77"/>
          </div>
        </div>
        <div className='container'>
          <SwitchTransition mode='in-out'>
            <CSSTransition
              key={pictureUrls[currentIndex]}
              classNames="pic"
              timeout={150}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className='preview'>
        <div className='info'>
          <div className='desc'>
            <div className='count'>
              <span>{currentIndex + 1} / {pictureUrls.length}: </span>
              <span>room Apartment图片{currentIndex + 1}</span>
            </div>
            <div className='toggle' onClick={e => setShowList(!showList)}>
              <span>{ showList ? "隐藏" : "显示" }照片列表</span>
              { showList ? <TriangleArrowSvg/> : <TriangleArrowTop/> }
            </div>
          </div>
          <div className='list'>
            <Indicator selectedIndex={currentIndex}>
              {
                pictureUrls.map((item, index) => {
                  return (
                    <div 
                      className={classNames('item', { active: currentIndex === index})}
                      key={item}
                      onClick={e => bottomItemClickHandle(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </PicturePreviewerWrapper>
  )
})

PicturePreviewer.propTypes = {
  pictureUrls: PropTypes.array
}

export default PicturePreviewer