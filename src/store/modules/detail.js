import { createSlice } from '@reduxjs/toolkit'

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detailInfo: {}
  },
  reducers: {
    changeDetailInfoAction(state, { payload }) {
      state.detailInfo = payload
    }
  }
})

export const { changeDetailInfoAction } = detailSlice.actions
export default detailSlice.reducer