import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData, getHomeLongForData, getHomePlusData } from "@/services/modules/home"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchHomeDataAction = createAsyncThunk("fetchData", (payload, { dispatch }) => {
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })

  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })

  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })

  getHomeHotRecommendData().then(res => {
    dispatch(changeHotRecommendInfoAction(res))
  })

  getHomeLongForData().then(res => {
    dispatch(changeLongForInfoAction(res))
  })

  getHomePlusData().then(res => {
    dispatch(changePlusInfoAction(res))
  })
})

const homeSlice = createSlice({
  name: "home",
  initialState: { 
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    longForInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeHotRecommendInfoAction(state, { payload }) {
      state.hotRecommendInfo = payload
    },
    changeLongForInfoAction(state, { payload }) {
      state.longForInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  }
})

export const { 
  changeGoodPriceInfoAction, 
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendInfoAction,
  changeLongForInfoAction,
  changePlusInfoAction
} = homeSlice.actions
export default homeSlice.reducer