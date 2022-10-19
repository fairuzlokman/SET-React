import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, MenuItem, TextField } from '@mui/material';
import useAuth from '../hooks/useAuth';
import { getLookup } from '../api/lookup';
import { useEffect } from 'react';
import { editTicket } from '../api/tickets';
import { editUser } from '../api/users';

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

const EditProfileForm = ({handleClose}) => {
    const { thisUser, token } = useAuth();

    // console.log(thisUser);

    const formik = useFormik({
        initialValues: {
            name: thisUser.name,
            role_id: thisUser.role == "Admin" ? 1 : 2,
            email: thisUser.email,
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            editUser(thisUser.id, values, token)
            handleClose()

        },
    });

    const [roles, setRoles] = useState([])
    const getRoles = async () => {
        const { data } = await getLookup();
        setRoles(data?.role);
    }
    
    useEffect(() => {getRoles()}, [])

    return (
        <div className='p-2'>
            <form onSubmit={formik.handleSubmit}>
                {/* <TextField
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
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                /> */}
                {/* <TextField
                    fullWidth
                    disabled={thisUser.role == 'User'}
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
                </TextField> */}
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
                <Button
                sx={{textTransform: "none"}}
                color="primary"
                variant="contained" 
                fullWidth
                type="submit"
                >
                    Change
                </Button>
            </form>
        </div>
    );
};

export default EditProfileForm