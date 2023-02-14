import React, { memo } from 'react'
import { LoadingWrapper } from './style'

const Loading = memo(() => {
  return (
    <LoadingWrapper>
      <div className="loading">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </LoadingWrapper>
  )
})

export default Loading