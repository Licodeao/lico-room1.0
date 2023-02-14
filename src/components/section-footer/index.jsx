import IconMoreArrow from '@/assets/svg/more'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { SectionFooterWrapper } from './style'

const SectionFooter = memo((props) => {
  const { name } = props
  let showMessage = "显示更多"
  if (name) {
    showMessage = `查看更多${name}房源`
  }

  const navigate = useNavigate()
  function moreClickHandle() {
    navigate("/entire")
  }

  return (
    <SectionFooterWrapper color={name ? "#00848A" : "#000"}>
      <div className='info' onClick={moreClickHandle}>
        <span className='text'>{showMessage}</span>
        <IconMoreArrow />
      </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter