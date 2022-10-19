import React from 'react'
import useAuth from '../hooks/useAuth';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';
import EditProfileForm from '../components/EditProfileForm';

const UserPage = () => {
    const { thisUser } = useAuth()
    const [editDialog, setEditDialog] = useState(false)
    const handleEdit = () => {
        setEditDialog(true)
    }
    const handleCloseEdit = () => {
        setEditDialog(false)
    }

    return (
        <div className='w-full h-full flex flex-col items-center'>
            <h1 className='text-8xl p-10'>
                Hello,&nbsp;
                <span style={{color: "#1976d2"}}>
                    {thisUser.name}
                </span>!
            </h1>
            <div className='w-full px-40 flex flex-col gap-5'>
                <h3 className='w-full'>Name</h3>
                <div className='p-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)] rounded-md'>
                    <h1 className='w-full text-xl font-normal'>{thisUser.name}</h1>
                </div>
                <h3 className='w-full'>Email</h3>
                <div className='p-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)] rounded-md'>
                    <h1 className='w-full text-xl font-normal'>{thisUser.email}</h1>
                </div>
                <h3 className='w-full'>Role</h3>
                <div className='flex p-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)] rounded-md'>
                    <h1 className='w-full text-xl font-normal'>{thisUser.role}</h1>
                </div>
                <button onClick={() => handleEdit()} className='flex flex-row justify-end'>
                    <p className='underline'>change password &nbsp;</p>
                    <ModeEditIcon className='cursor-pointer hover:text-slate-500' />
                </button>
            </div>

            <Dialog fullWidth open={editDialog} onClose={handleCloseEdit}>
                <DialogTitle className='text-center'>Change Password</DialogTitle>
                <DialogContent>
                    <EditProfileForm handleClose={handleCloseEdit} />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UserPage