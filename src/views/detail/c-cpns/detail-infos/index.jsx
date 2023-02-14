import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { DetailInfoWrapper } from './style'

const DetailInfo = memo((props) => {
  const { reviews } = props
  return (
    <DetailInfoWrapper>
      <div className='title'>房客评价</div>
      {
        reviews?.length ? reviews?.map(item => {
          return (
            <div className='review' key={item}>
              <div className='top'>
                <img src={item.reviewer_image_url} alt="" />
                <div className='info'>
                  <span className='name'>微信用户</span>
                  <span className='date'>{item.localized_date}</span>
                </div>
              </div>
              <div className='bottom'>
                {item.comments}
              </div>
            </div>
          )
        }) : "当前房源无评价!"
      }
      {
        reviews?.length && (
          <div className='tip'>
            当前已无其他评价!
          </div>
        )
      }
    </DetailInfoWrapper>
  )
})

DetailInfo.propTypes = {
  reviews: PropTypes.array
}

export default DetailInfo