import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export const Navigation = () => {
    const { role } = useAuth();

    const style = ({ isActive=true }) => ({
        all: 'unset',
        textDecoration: isActive ? 'underline' : 'none',
        cursor: 'pointer'
    })

    return (
            <div className="w-full sm:w-[150px] h-[100px] sm:h-full flex flex-row sm:flex-col justify-evenly items-center bg-black text-[silver] shadow-xl">
                { role == "Admin" ? <NavLink style={style} to={'/userlist'}>Users</NavLink> : null}
                <NavLink style={style} to={'/ticketlist'}>Tickets</NavLink>
            </div>
    )
}
