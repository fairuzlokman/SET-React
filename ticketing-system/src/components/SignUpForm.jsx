import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, MenuItem, TextField } from '@mui/material';
import useAuth from '../hooks/useAuth';
import { getLookup } from '../api/lookup';
import { useEffect } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CancelIcon from '@mui/icons-material/Cancel';

const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .max(20, 'Too long')
        .required('Name is required'),
    role_id: yup
        .number()
        .integer()
        .required('Role is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const SignUpForm = () => {
    const { signup, navigate, signupError } = useAuth();

    const handleClick = () => {
        navigate(-1)
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            role_id: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            signup(values)
        },
    });

    const [roles, setRoles] = useState([])
    const getRoles = async () => {
        const { data } = await getLookup();
        setRoles(data?.role);
    }
    
    useEffect(() => {getRoles()}, [])

    return (
        <div className='w-[500px] p-[80px] flex flex-col gap-10 border-[1px] border-[lightgrey] rounded-xl'>
            <div className='flex flex-row items-center'>
                <KeyboardBackspaceIcon onClick={() => {handleClick()}} className='absolute cursor-pointer' />
                <h1 className='w-full text-6xl text-center'>Sign up</h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    fullWidth
                    select
                    id="role_id"
                    name="role_id"
                    label="Role"
                    value={formik.values.role_id}
                    onChange={formik.handleChange}
                    error={formik.touched.role_id && Boolean(formik.errors.role_id)}
                    helperText={formik.touched.role_id && formik.errors.role_id}
                >
                    {roles.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.role}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                {signupError ? <div className='flex flex-row gap-1 text-red-600 justify-center'><CancelIcon /><p>Email has already been taken. Please use a different email.</p></div> : null}
                <Button
                sx={{textTransform: "none"}}
                color="primary"
                variant="contained" 
                fullWidth
                type="submit"
                >
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export default SignUpForm