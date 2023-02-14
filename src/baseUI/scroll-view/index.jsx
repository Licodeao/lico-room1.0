// import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/arrowLeft'
import IconArrowRight from '@/assets/svg/arrowRight'

const ScrollView = memo((props) => {
  const [posIndex, setPosIndex] = useState(0)
  const [showLeftBtn, setShowLeftBtn] = useState(false)
  const [showRightBtn, setShowRightBtn] = useState(true)
  
  const scrollRef = useRef()
  const totalDistanceRef = useRef(0)
  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth
    const clientWidth = scrollRef.current.clientWidth
    totalDistanceRef.current = scrollWidth - clientWidth
    setShowRightBtn(totalDistanceRef.current > 0)
  }, [props.children])

  function leftClickHandle() {
    scrollPosition(posIndex - 1)
  }

  function rightClickHandle() {
    scrollPosition(posIndex + 1)
  }

  function scrollPosition(index) {
    const scrollLeft = scrollRef.current.children[index].offsetLeft
    scrollRef.current.style.transform = `translate(-${scrollLeft}px)`
    setPosIndex(index)
    if (scrollLeft > totalDistanceRef.current) {
      setShowRightBtn(false)
    }
    setShowRightBtn(totalDistanceRef.current > scrollLeft)
    setShowLeftBtn(scrollLeft > 0)
  }

  return (
    <ScrollViewWrapper>
      { showLeftBtn && (
        <div className='control left' onClick={leftClickHandle}>
          <IconArrowLeft />
        </div>
      ) }
      { showRightBtn && (
        <div className='control right' onClick={rightClickHandle}>
          <IconArrowRight />
        </div>
      ) }

      <div className='slot'>
        <div className='scroll' ref={scrollRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView