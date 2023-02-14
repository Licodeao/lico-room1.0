import ScrollView from '@/baseUI/scroll-view'
import LongForItem from '@/components/longFor-item'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeLongForWrapper } from './style'

const HomeLongFor = memo((props) => {
  const { infoData } = props
  return (
    <HomeLongForWrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle}/>
      <div className='longfor-list'>
        <ScrollView>
          {
            infoData.list.map((item, index) => {
              return <LongForItem itemData={item} key={index} />
            })
          }
        </ScrollView>
      </div>
    </HomeLongForWrapper>
  )
})

HomeLongFor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongFor