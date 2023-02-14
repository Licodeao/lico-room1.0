import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
      isFixed: true,
      topAlpha: false
    },
    isLoading: true
  },
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload
    },
    changeIsLoadingAction(state, { payload }) {
      state.isLoading = payload
    }
  }
})

export const { 
  changeHeaderConfigAction, 
  changeIsLoadingAction
} = mainSlice.actions
export default mainSlice.reducer