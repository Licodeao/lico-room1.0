import { getEntireRoomList } from '@/services'
import * as actionTypes from './constant'

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

export const fetchRoomListAction = () => {
  return async (dispatch, getState) => {
    const currentPage = getState().entire.currentPage
    dispatch(changeIsLoadingAction(true))
    const res = await getEntireRoomList(currentPage * 20)
    dispatch(changeIsLoadingAction(false))
    const list = res.list
    const totalCount = res.totalCount
    dispatch(changeRoomListAction(list))
    dispatch(changeTotalCountAction(totalCount))
  }
}