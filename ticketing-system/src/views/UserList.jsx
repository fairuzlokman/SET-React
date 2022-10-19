import { Paper } from '@mui/material';
import React from 'react'
import useAuth from '../hooks/useAuth';

const UserList = () => {
  const { users } = useAuth();
  
  return (
    <div className='w-full h-full'>
        <p className='text-[70px] px-10'>Users</p>
        <Paper elevation={5} className='w-full h-10 flex flex-row gap-5 items-center mb-1 px-5'>
          <div className='w-[40px]'>No.</div>
          <div className='w-1/3 text-center'>Name</div>
          <div className='w-1/3 text-center'>Email</div>
          <div className='w-1/3 text-center'>Role</div>
        </Paper>
        {
          users?.map((user, index) => (
            <button className='w-full h-10 flex flex-row gap-5 items-center px-5 border-b-2 hover:bg-slate-50' key={user.id}>
              <div className='w-[40px]'>{index + 1}.</div>           
              <div className='w-1/3'>{user.name}</div>           
              <div className='w-1/3'>{user.email}</div>           
              <div className='w-1/3'>{user.role}</div>           
            </button>
          ))
        }
    </div>
  )
}

export default UserList