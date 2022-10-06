import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
// import ReactQueryDevTools from '@tanstack/react-query-devtools'

const Layout = () => {
  return (
    <div>
        <Navigation />
        <Outlet />
        {/* <ReactQueryDevTools  /> */}
    </div>
  )
}

export default Layout