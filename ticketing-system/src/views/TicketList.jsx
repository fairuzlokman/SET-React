import React, { useState } from 'react'
import CreateTicketForm from '../components/CreateTicketForm'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { Dialog, DialogContent, DialogTitle, Paper } from '@mui/material';
import useAuth from '../hooks/useAuth';
import DisplayTicket from '../components/DisplayTicket';
import { useQuery } from '@tanstack/react-query'
import { get } from '../api';

const TicketList = () => {
  const { thisUser, tickets, token, setTickets } = useAuth();
  const [ticket, setTicket] = useState([])
  
  const fetchTickets = async () => {
    const res = await get (
      'https://ticketing-fairuz-lokman.herokuapp.com/api/ticket', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return res;
  }

  const { refetch } = useQuery(["ticket"], fetchTickets,{
    enabled: false,
    onSuccess: (res) => {
      setTickets(res?.data?.data)
    },
    onError:(res)=>{console.log('error', res)}
  });
  
    // For dialog
  const [createNew, setCreateNew] = useState(false)
  const [display, setDisplay] = useState(false)
  
  // For creating new tickets
  const handleClickCreateNew = () => {
    setCreateNew(true)
  }
  const handleCloseCreateNew = () => {
    setCreateNew(false)
  }
  
  // For display tickets
  const handleDisplay = (thisTicket) => {
    setDisplay(true)
    setTicket(thisTicket)
  }
  const handleCloseDisplay = () => {
    setDisplay(false)
  }
  
  return (
    <div className='w-full h-full relative'>
        <p className='text-[40px] sm:text-[70px] px-10'>Tickets</p>
        <Paper elevation={5} className='w-full h-10 flex flex-row gap-5 items-center mb-1 px-5'>
          <div className='w-16'>No.</div>
          <div className='w-24'>Ticket ID</div>
          <div className='w-1/4 text-center'>Title</div>
          <div className='w-1/5 text-center'>Category</div>
          <div className='w-1/6 text-center'>Priority</div>
          <div className='w-1/5 text-center'>Status</div>
        </Paper>
        <div className=''>
          {
            tickets?.map((ticket, index) => (
              <div key={index}>
                <button onClick={() => handleDisplay(ticket)} className='w-full h-10 flex flex-row gap-5 items-center px-5 border-b-2 hover:bg-slate-50'>
                  <div className='w-16 text-left'>{index + 1}.</div>
                  <div className='w-24 text-left'>{ticket.ticket_id}</div>
                  <div className='w-1/4 text-center'>{ticket.title}</div>
                  <div className='w-1/5 text-center'>{ticket.category}</div>
                  {
                    ticket.priority == "High" ? <div className='w-1/6 text-center'><LabelImportantIcon sx={{color: "gold"}} />{ticket.priority}</div>
                    : <div className='w-1/6 text-center'>{ticket.priority}</div>
                  }
                  {/* Change color based on div */}
                  {
                    ticket.status == "Complete" ? <div className='w-1/5 h-[25px] text-center bg-green-500 text-white rounded-full'><p className='sm:block hidden'>{ticket.status}</p></div>
                    : ticket.status == "In-progress" ? <div className='w-1/5 h-[25px] text-center bg-yellow-500 text-white rounded-full'><p className='sm:block hidden'>{ticket.status}</p></div>
                    : <div className='w-1/5 h-[25px] text-center bg-red-600 text-white rounded-full'><p className='sm:block hidden'>{ticket.status}</p></div>
                  }
                </button>
              </div>
            ))
          }
        </div>
        
        {/* Display specific ticket */}
        <Dialog open={display} onClose={handleCloseDisplay}>
          <DialogTitle className='flex flex-row justify-between'>
            <h1>{ticket.title}</h1>
            <h1>Ticket ID: {ticket.ticket_id}</h1>
          </DialogTitle>
          <DialogContent className='w-[500px] sm:w-[600px]'>
            <DisplayTicket refetch={refetch} handleClose={handleCloseDisplay} ticket={ticket} />
          </DialogContent>
        </Dialog>

        {/* Create new */}
        <Dialog fullWidth open={createNew} onClose={handleCloseCreateNew}>
          <DialogTitle className='text-center'>
            <h1>New Ticket</h1>
          </DialogTitle>
          <DialogContent>
            <CreateTicketForm refetch={refetch} handleClose={handleCloseCreateNew} />
          </DialogContent>
        </Dialog>
        {thisUser.role == "Admin" ? <button className='fixed right-5 bottom-5 rounded-full hover:scale-105' onClick={handleClickCreateNew}><AddCircleIcon sx={{width: 50, height: 50, color: "#1976D2"}} /></button> : null }
    </div>
  )
}

export default TicketList