import React from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { Navigation } from '../components/Navigation'
import useAuth from "../hooks/useAuth";
import { CustomButton } from '../components/CustomButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Paper } from '@mui/material';

const Layout = () => {
  const { token, logout, thisUser } = useAuth();
  const navigate = useNavigate();
  
  return (
    <div className='h-screen flex flex-col items-center'>
        <Paper elevation={5} className='h-[80px] w-[100%] flex flex-row justify-between items-center px-[50px]'>
          <Link style={{all: 'unset', cursor: 'pointer'}} to={'/'}>
            <HomeOutlinedIcon />
          </Link>
          <div className='flex flex-row gap-10'>
            { !token ? <CustomButton onClick={() => navigate('/login')}>
              Log in
            </CustomButton> : null}
            { !token ? <CustomButton onClick={() => navigate('/signup')}>
              Sign up
            </CustomButton> : null}
            { token ? <CustomButton onClick={() => navigate('/user')}>
              { thisUser.role == "Admin" ? <div className='p-1 sm:w-[80px] rounded-full bg-gradient-to-r from-cyan-500 to-[#3752F9] text-white flex flex-row items-center'>
                <AccountCircleOutlinedIcon />
                <p className='sm:block hidden'>Admin</p>
              </div>
               : <AccountCircleOutlinedIcon />}
            </CustomButton> : null}
            { token ? <CustomButton onClick={() => logout()}>
              Log out
            </CustomButton> : null}
          </div>
        </Paper>
        <div className='w-full h-full flex flex-col sm:flex-row justify-between items-center'>
          { !token ? null : <Navigation />}
          <div className='w-full h-full flex justify-center items-center'>
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default Layout