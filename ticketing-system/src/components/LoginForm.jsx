import React from 'react'
import { useFormik } from 'formik';
import * as yup from "yup";
import { Paper, TextField, Button } from '@mui/material';
import useAuth from '../hooks/useAuth';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CancelIcon from '@mui/icons-material/Cancel';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const LoginForm = () => {
    const { login, navigate, loginError } = useAuth();
    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            login(values)
        },
    });

    const handleClick = () => {
        navigate('/signup')
    }

    const handleBackButton = () => {
        navigate(-1)
    }

    return (
        <div className='w-[500px] p-[80px] flex flex-col gap-10 border-[1px] border-[lightgrey] rounded-xl'>
            <div className='flex flex-row items-center'>
                <KeyboardBackspaceIcon onClick={() => {handleBackButton()}} className='absolute cursor-pointer' />
                <h1 className='w-full text-6xl text-center'>Login</h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
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
                {loginError ? <div className='flex flex-row gap-1 text-red-600 justify-center'><CancelIcon /><p>Email and password does not match.</p></div> : null}
                <Button
                sx={{textTransform: "none"}}
                type="submit"
                variant="contained"
                >
                    Login
                </Button>
                <p className='text-center'>Don't have an account? <span onClick={() => {handleClick()}} className='text-sky-600 cursor-pointer hover:underline'>Sign up</span></p>
            </form>
        </div>
    );
}

export default LoginForm

