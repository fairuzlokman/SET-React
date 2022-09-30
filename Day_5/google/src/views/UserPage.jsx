import React from 'react'
import useAuth from '../hooks/useAuth';

const UserPage = () => {
    const { details } = useAuth();

    return (
        <div>
            <h1 className='Content'>
                Hello&nbsp;
                <span style={{color: "#1976d2"}}>
                    {details.fname+" "+details.lname}
                </span>!
            </h1>
            <h3 style={{color: "#1976d2"}}>{details.email}</h3>
        </div>
    )
}

export default UserPage