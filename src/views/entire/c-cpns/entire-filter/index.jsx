import React, { memo, useState } from 'react'
import { EntireFilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo((props) => {
  const [selectedItems, setSelectedItems] = useState([])

  function itemClickHandle(item) {
    const newItems = [...selectedItems]
    if (newItems.includes(item)) {
      const itemIndex = newItems.findIndex(filter => filter === item)
      newItems.splice(itemIndex, 1)
    } else {
      newItems.push(item)
    }
    setSelectedItems(newItems)
  }

  return (
    <EntireFilterWrapper>
      <div className='filter'>
        {
          filterData.map(item => {
            return (
              <div 
                className={classNames("item", { active: selectedItems.includes(item) })}
                key={item}
                onClick={e => itemClickHandle(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </EntireFilterWrapper>
  )
})

export default EntireFilter