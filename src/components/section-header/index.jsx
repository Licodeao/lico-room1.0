import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { SectionHeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  const { title, subTitle } = props

  return (
    <SectionHeaderWrapper>
      <h2 className='title'>{title}</h2>
      { subTitle && <div className='subTitle'>{subTitle}</div> }
    </SectionHeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export default SectionHeader