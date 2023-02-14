import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionList from '@/components/section-list'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSection1Wrapper } from './style'

const HomeSection1 = memo((props) => {
  const { infoData } = props
  return (
    <HomeSection1Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle}/>
      <SectionList roomList={infoData.list} itemWidth="25%"/>
      <SectionFooter />
    </HomeSection1Wrapper>
  )
})

HomeSection1.propTypes = {  
  infoData: PropTypes.object
}

export default HomeSection1