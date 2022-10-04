import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    const style = ({ isActive = true}) => ({
        all: 'unset',
        textDecoration: isActive ? 'underline' : 'none',
        cursor: 'pointer',
    })
    
    return (
        <div style={{display: 'flex', gap: '10px'}}>
            <NavLink style={style} to={'/login'}>Login</NavLink>
            <NavLink style={style} to={'/signup'}>SignUp</NavLink>
            <NavLink style={style} to={'/users'}>Users</NavLink>
            <NavLink style={style} to={'/tickets'}>Tickets</NavLink>
        </div>
    )
}

export default Navigation