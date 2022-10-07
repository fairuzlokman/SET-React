import React, { useEffect } from 'react'
import { TextField, Button, InputAdornment } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { useState } from 'react';

const FLForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [contact, setContact] = useState({name: null, email: null, phone: null})
    useEffect(() => {}, [])

    const handleClick = () => {
        if(name && email && phone){
            setContact({
                name,
                email,
                phone
            })
            alert(JSON.stringify(contact, null, 2))
            console.log(contact)
        } else 'Please fill in all the required field!'
    }
    useEffect(() => setContact({
        name,
        email,
        phone
    }), [name, email, phone])

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 15
        }}>
            <TextField
                InputProps={{
                    startAdornment: <InputAdornment position='start'>Name</InputAdornment>
                }}
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                // error={!contact.name}
                // helperText={!contact.name ? 'Empty field' : ''}
            />
            <TextField
                InputProps={{
                    startAdornment: <InputAdornment position='start'><EmailIcon /></InputAdornment>
                }}
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                // error={!contact.email}
                // helperText={!contact.email ? 'Empty field' : ''}
            />
            <TextField
                InputProps={{
                    startAdornment: <InputAdornment position='start'><CallIcon /></InputAdornment>
                }}
                value={phone}
                onChange={(e) => {setPhone(e.target.value)}}
                // error={!contact.phone}
                // helperText={!contact.phone ? 'Empty field' : ''}
            />
            <Button onClick={() => handleClick()} variant='contained'>Submit</Button>
        </div>
    )
}

export default FLForm