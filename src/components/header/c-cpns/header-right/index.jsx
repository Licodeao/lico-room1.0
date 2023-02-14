import AvatarIcon from '@/assets/svg/avatar'
import GlobalIcon from '@/assets/svg/global'
import MenuIcon from '@/assets/svg/menu'
import React, { memo, useState, useEffect } from 'react'
import { HeaderRightWrapper } from './style'

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    window.addEventListener('click', windowHandleClick, true)
    return () => {
      window.removeEventListener("click", windowHandleClick, true)
    }
  }, [])

  function panelHandler() {
    setShowPanel(true)
  }

  return (
    <HeaderRightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <GlobalIcon />
        </span>
      </div>
      
      <div className='profile' onClick={panelHandler}>
        <MenuIcon />
        <AvatarIcon />

        {
          showPanel && (
            <div className="panel">
              <div className='top'>
                <div className='item register'>注册</div>
                <div className='item login'>登录</div>
              </div>
              <div className='bottom'>
                <div className='item'>出租房源</div>
                <div className='item'>开展体验</div>
                <div className='item'>帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </HeaderRightWrapper>
  )
})

export default HeaderRight