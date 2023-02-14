import { changeHeaderConfigAction } from '@/store/modules/main'
import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import DetailInfo from './c-cpns/detail-infos'
import DetailPicture from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPicture pictureUrls={detailInfo.picture_urls}/>
      <DetailInfo reviews={detailInfo.reviews}/>
    </DetailWrapper>
  )
})

export default Detail