import React, { memo } from 'react'
import { EntirePaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeCurrentPageAction, fetchRoomListAction } from '@/store/modules/entire/createActions';

const EntirePagination = memo((props) => {
  const { totalCount, currentPage, roomList } = useSelector(state => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }), shallowEqual)

  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  const dispatch = useDispatch()
  function pageChangeHandle(event, pageCount) {
    window.scrollTo(0, 0)
    dispatch(changeCurrentPageAction(pageCount - 1))
    dispatch(fetchRoomListAction())
  }

  return (
    <EntirePaginationWrapper>
      {
        !!roomList.length && (
          <div className='info'>
            <Pagination count={totalPage} onChange={pageChangeHandle} />
            <div className='desc'>
              第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个住宿
            </div>
          </div>
        )
      }
    </EntirePaginationWrapper>
  )
})

export default EntirePagination