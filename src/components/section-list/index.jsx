import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionListWrapper } from "./style"
import RoomItem from '../room-item'

const SectionList = memo((props) => {
  const { roomList = [], itemWidth } = props

  return (
    <SectionListWrapper>
      {
        roomList.slice(0, 8)?.map(item => {
          return <RoomItem itemData={item} itemWidth={itemWidth} key={item.id} />
        })
      }
    </SectionListWrapper>
  )
})

SectionList.propTypes = {
  roomList: PropTypes.array
}

export default SectionList