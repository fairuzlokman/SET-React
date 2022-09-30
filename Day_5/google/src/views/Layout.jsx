import React from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { Navigation } from '../components/Navigation'
import useAuth from "../hooks/useAuth";
import Button from '@mui/material/Button';
import { CustomButton } from '../components/CustomButton';

export const Layout = () => {
  const { token, logout, details } = useAuth();
  const navigate = useNavigate();
  
  return (
    <div className='Pages'>
        <div className='TopBar'>
          <Link style={{all: 'unset', cursor: 'pointer'}} to={'/'}>
            Google
          </Link>
          <div style={{display: 'flex', gap: '20px'}}>
            { !token ? <CustomButton onClick={() => navigate('/login')}>
              Log in
            </CustomButton> : null}
            { !token ? <CustomButton onClick={() => navigate('/signup')}>
              Sign up
            </CustomButton> : null}
            { token ? <CustomButton onClick={() => navigate('/user')}>
              {details.fname}
            </CustomButton> : null}
            { token ? <CustomButton onClick={() => logout()}>
              Log out
            </CustomButton> : null}
          </div>
        </div>
        <Outlet />
        <Navigation />
    </div>
  )
}
