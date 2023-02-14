import SvgLogo from '@/assets/svg/logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderLeftWrapper } from './style'

const HeaderLeft = memo(() => {

  const navigate = useNavigate()
  function logoClickHandle() {
    navigate("/home")
  }

  return (
    <HeaderLeftWrapper>
      <div className='logo' onClick={logoClickHandle}>
        <SvgLogo />
      </div>
    </HeaderLeftWrapper>
  )
})

export default HeaderLeft