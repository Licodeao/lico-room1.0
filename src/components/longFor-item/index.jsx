import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForItemWrapper } from './style'

const LongForItem = memo((props) => {
  const { itemData } = props
  return (
    <LongForItemWrapper>
      <div className='inner'>
        <img className='cover' src={itemData.picture_url} alt=""/>
        <div className='bg-cover'></div>
        <div className='info'>
          <div className='city'>{itemData.city}</div>
          <div className='price'>均价 {itemData.price}</div>
        </div>
      </div>
    </LongForItemWrapper>
  )
})

LongForItem.propTypes = {
  itemData: PropTypes.object
}

export default LongForItem