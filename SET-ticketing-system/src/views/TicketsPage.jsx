import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TicketsPage = () => {
  const { tickets } = useSelector(state => state.ticket)
  const dispatch = useDispatch()
  const setTickets = (tickets) => dispatch({ type: 'SET_TICKET_STATE', payload: {tickets} })

  return (
    <div>
      <h1>Tickets</h1>
      <ul>
        {
          tickets.map((u,i) => (
            <li key={i}>{u.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default TicketsPage