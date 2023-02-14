import ScrollView from '@/baseUI/scroll-view'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionTabsWrapper } from "./style"

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index, item) {
    setCurrentIndex(index)
    tabClick(index, item)
  }

  return (
    <SectionTabsWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (
              <div 
                key={index}
                className={classNames("item", { active: index === currentIndex })}
                onClick={e   => itemClickHandle(index, item)}
              >
                {item}
              </div>
            )
          })
        }
      </ScrollView>
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs