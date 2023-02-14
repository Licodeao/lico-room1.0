import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/index'
import Header from './components/header'
import Footer from './components/footer'
import useScrollTop from './hooks/useScrollTop'

const App = memo(() => {
  useScrollTop()

  return (
    <div className='app'>
      <div className='header'>
        <Header />
      </div>
      <div className='content'>
        { useRoutes(routes) }
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
})

export default App