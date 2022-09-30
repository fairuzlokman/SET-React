import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navigation = () => {
    const style = ({ isActive=true }) => ({
        all: 'unset',
        textDecoration: isActive ? 'underline' : 'none',
        cursor: 'pointer'
    })

    return (
            <div className="navList">
                <NavLink style={style} to={'/about'}>About</NavLink>
                <NavLink style={style} to={'/advert'}>Advertising</NavLink>
                <NavLink style={style} to={'/business'}>Business</NavLink>
                <NavLink style={style} to={'/how'}>How Search works</NavLink>
            </div>
    )
}
