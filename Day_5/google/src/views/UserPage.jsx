import React from 'react'
import useAuth from '../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../api/users';
import { useEffect } from 'react';
import { padding } from '@mui/system';

const UserPage = () => {
    const { details, users } = useAuth();
    const image = users.results[0].picture.large
    const name = users.results[0].name
    const age = users.results[0].dob.age
    const email = users.results[0].email

    return (
        <>
            <div>
                <h1 className='Content'>
                    Hello,&nbsp;
                    <span style={{color: "#1976d2"}}>
                        {details.fname+" "+details.lname}
                    </span>!
                </h1>
                <h3 style={{color: "#1976d2"}}>{details.email}</h3>
            </div>
            <div style={{
                backgroundColor: '#1976d2',
                color: 'white',
                width: '500px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
                padding: '20px',
                boxShadow: '10px 10px 5px #aaaaaa',
                borderRadius: '20px'
            }}>
                <h1>Someone followed you!</h1>
                <img style={{borderRadius: '50%', border: '5px solid white'}} src={image} alt="" />
                <h2>{[name.first, name.last].join(' ')} | {age}</h2>
                <h3>{email}</h3>
            </div>
        </>
    )
}

export default UserPage