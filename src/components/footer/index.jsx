import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footerData from "@/assets/data/footer.json"

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className='wrapper'>
        <div className='service'>
          {
            footerData.map(item => {
              return (
                <div className='item' key={item.name}>
                  <div className='name'>{item.name}</div>
                  <div className='list'>
                    {
                      item.list.map(iten => {
                        return <div className='iten' key={iten} onClick={e => window.location.href = "https://licodeao.top"}>{iten}</div>
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='statement'>© 2022 Licodeao, Inc. All rights reserved.</div>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter