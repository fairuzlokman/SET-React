import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
    return (
        <nav
            style={{
                borderBottom: '1px solid black',
                padding: '1rem',
            }}
        >
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
        </nav>
    )
}
