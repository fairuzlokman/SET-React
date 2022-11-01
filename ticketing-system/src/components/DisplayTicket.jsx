import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import useAuth from '../hooks/useAuth';
import { deleteTicket } from '../api/tickets';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import EditTicketForm from './EditTicketForm';

const DisplayTicket = ({ticket, handleClose, refetch}) => {
    const { token, role } = useAuth()
    const [editDialog, setEditDialog] = useState(false)

    const handleEdit = () => {
        setEditDialog(true)
    }
    const handleCloseEdit = () => {
        setEditDialog(false)
    }
    
    const handleDelete = () => {
        deleteTicket(ticket.ticket_id, token)
        refetch()
        // refetch()
        handleClose()
    }
    
    return (
        <div className='flex flex-col gap-2'>
            <div className='w-full h-[150px] p-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)] rounded-md'>{ticket.description}</div>
            <div className='flex flex-row gap-2 justify-between'>
                <div className='w-1/3 flex flex-col gap-2'>
                    <h1>Category</h1>
                    <div className='w-full p-2 text-center shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)] rounded-md'>{ticket.category}</div>
                </div>
                <div className='w-1/3 flex flex-col gap-2'>
                    <h1>Priority</h1>
                    <div className='w-full p-2 text-center shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)] rounded-md'>{ticket.priority}</div>
                </div>
                <div className='w-1/3 flex flex-col gap-2'>
                    <h1>Status</h1>
                    <div className='w-full p-2 text-center shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)] rounded-md'>{ticket.status}</div>
                </div>
            </div>
            <div className='flex flex-row items-center'>
                <h1 className='w-1/3'>Assigned to: </h1>
                <div className='w-2/3 p-2 text-center shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)] rounded-md'>{ticket.assign_to}</div>
            </div>
            <div className='flex flex-row justify-between pt-5'>
                <ModeEditIcon onClick={() => handleEdit()} className='hover:text-slate-500' />
                { role == "Admin" ? <DeleteIcon onClick={() => handleDelete()} className='hover:text-red-600' /> : null}
            </div>

            <Dialog fullWidth open={editDialog} onClose={handleCloseEdit}>
                <DialogTitle className='text-center'>
                    <h1>Edit Ticket ID: {ticket.ticket_id}</h1>
                </DialogTitle>
                <DialogContent className=''>
                    <EditTicketForm refetch={refetch} ticket={ticket} handleClose={handleClose} />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default DisplayTicket