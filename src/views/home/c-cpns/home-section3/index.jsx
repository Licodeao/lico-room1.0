import ScrollView from '@/baseUI/scroll-view'
import RoomItem from '@/components/room-item'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSection3Wrapper } from './style'

const HomeSection3 = memo((props) => {
  const { infoData } = props
  return (
    <HomeSection3Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle}/>
      <div className='room-list'>
        <ScrollView>
          {
            infoData.list.map(item => {
              return <RoomItem itemData={item} itemWidth="20%" key={item.id}/>
            })
          }
        </ScrollView>
      </div>
      <SectionFooter name="plus"/>
    </HomeSection3Wrapper>  
  )
})

HomeSection3.propTypes = {
  itemData: PropTypes.object
}

export default HomeSection3