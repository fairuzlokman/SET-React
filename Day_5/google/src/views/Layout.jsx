import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Navigation } from '../components/Navigation'

export const Layout = () => {
  return (
    <div className='Pages'>
        <div className='Search'>
          <Link style={{all: 'unset', cursor: 'pointer'}} to={'/'}>
            <p>Google</p>
          </Link>
        </div>
        <hr style={{
          width: "100%",
          position: "absolute",
          top: "70px"
        }} />
        <Outlet />
        <Navigation />
    </div>
  )
}
