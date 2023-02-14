import SearchIcon from '@/assets/svg/search'
import React, { memo, useState } from 'react'
import { CSSTransition } from "react-transition-group"
import SearchTabs from './search-tabs'
import SearchTitles from '@/assets/data/search_titles'
import { HeaderCenterWrapper } from './style'
import SearchSections from './search-sections'

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props
  const [tabIndex, setTabIndex] = useState(0)
  
  const titles = SearchTitles.map(item => item.title)

  function searchBarClickHandle() {
    if (searchBarClick) searchBarClick()
  }

  return (
    <HeaderCenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className='searchBar' onClick={searchBarClickHandle}>
          <div className='text'>
            搜索更多房源...
          </div>
          <div className='icon'>
            <SearchIcon />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className='search-detail'>
          <SearchTabs titles={titles} tabClick={setTabIndex}/>
          <div className='infos'>
            <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos}/>
          </div>
        </div>
      </CSSTransition>
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter