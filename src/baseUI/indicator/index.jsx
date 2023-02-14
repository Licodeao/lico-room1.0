import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectedIndex = 0 } = props
  const contentRef = useRef()

  useEffect(() => {
    const selectedItem = contentRef.current.children[selectedIndex]
    const selectedItemWidth = selectedItem.clientWidth
    const selectedItemOffsetLeft = selectedItem.offsetLeft
    const scrollElWidth = contentRef.current.clientWidth
    const scrollElScroll = contentRef.current.scrollWidth
    let distance = selectedItemWidth * 0.5 + selectedItemOffsetLeft - scrollElWidth * 0.5
    if (distance < 0) distance = 0
    if (distance > scrollElScroll - scrollElWidth) distance = scrollElScroll - scrollElWidth
    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectedIndex])
  
  return (
    <IndicatorWrapper>
      <div className='content' ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectedIndex: PropTypes.number
}

export default Indicator