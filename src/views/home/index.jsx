import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/homeBanner'
import { HomeWrapper } from './style'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSection1 from './c-cpns/home-section1'
import HomeSection2 from './c-cpns/home-section2'
import { isEmptyObject } from '@/utils'
import HomeLongFor from './c-cpns/home-longFor'
import HomeSection3 from './c-cpns/home-section3'
import { changeHeaderConfigAction, changeIsLoadingAction } from '@/store/modules/main'

const Home = memo(() => {
  // 从redux中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo, hotRecommendInfo, longForInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo,
    longForInfo: state.home.longForInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeIsLoadingAction(false))
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className='content'>
        { isEmptyObject(discountInfo) && <HomeSection2 infoData={discountInfo} /> }
        { isEmptyObject(hotRecommendInfo) && <HomeSection2 infoData={hotRecommendInfo} /> }
        { isEmptyObject(longForInfo) && <HomeLongFor infoData={longForInfo}/> }
        { isEmptyObject(goodPriceInfo) && <HomeSection1 infoData={goodPriceInfo} /> }
        { isEmptyObject(highScoreInfo) && <HomeSection1 infoData={highScoreInfo} /> }
        { isEmptyObject(plusInfo) && <HomeSection3 infoData={plusInfo}/> }
      </div>
    </HomeWrapper>
  )
})

export default Home