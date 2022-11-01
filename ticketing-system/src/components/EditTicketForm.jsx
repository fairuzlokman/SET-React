import { Button, MenuItem, TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useFormik } from 'formik';
import React from 'react'
import { useState } from 'react';
import * as yup from 'yup';
import { get } from '../api';
import { editTicket } from '../api/tickets';
import useAuth from '../hooks/useAuth';

const validationSchema = yup.object({
    title: yup
        .string()
        .max(30, 'Too long')
        .required('Title is required'),
    description: yup
        .string()
        .required('Description is required'),
    category_id: yup
        .number()
        .integer()
        .required('Category is required'),
    priority_id: yup
        .number()
        .integer()
        .required('Priority is required'),
    status_id: yup
    .number()
    .integer(),
    assign_user_id: yup
    .number()
    .integer()
});

const EditTicketForm = ({handleClose, ticket, refetch}) => {
    const { token, role } = useAuth();
    const [lookup, setLookup] = useState({category: [], priority: [], status: []})
    const [users, setUsers] = useState([])
    
    const formik = useFormik({
        initialValues: {
            title: ticket.title,
            description: ticket.description,
            category_id: ticket.category == "Adnexio" ? 1 : ticket.category_id == "Meniaga" ? 2 : 3,
            priority_id: ticket.priority == "High" ? 1 : ticket.priority == "Mid" ? 2 : 3,
            status_id: ticket.status == "Complete" ? 1 : ticket.status == "In-progress" ? 2 : 3,
            assign_user_id: ticket.assign_to_id
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            editTicket(ticket.ticket_id, values, token)
            refetch()
            refetch()
            handleClose();
        },
    });
    
    // get lookup table
    const getLookup = async () => {
        const res = await get(
            'https://ticketing-fairuz-lokman.herokuapp.com/api/lookup'
        )
        return res
    }
    useQuery(["lookup"], getLookup, {
        enabled: true,
        onSuccess: (res) => {
          setLookup({category: res?.data?.category, priority: res?.data?.priority, status: res?.data?.status})
        }
    })

    // get users
    const getUsers = async () => {
        const res = await get(
            'https://ticketing-fairuz-lokman.herokuapp.com/api/user', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return res;
    }
    useQuery(["users"], getUsers, {
        enabled: true,
        onSuccess: (res) => {
            setUsers(res?.data?.users)
        }
    })

    return (
        <div className='w-full'>
            <form onSubmit={formik.handleSubmit}>
                <label>Title</label>
                <TextField
                    disabled={role == 'User'}
                    fullWidth
                    id="title"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                />
                <label>Description</label>
                <TextField
                    disabled={role == 'User'}
                    fullWidth
                    multiline
                    minRows={4}
                    id="description"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                />
                <div className='flex flex-row gap-3'>
                    <TextField
                        disabled={role == 'User'}
                        fullWidth
                        select
                        id="category_id"
                        name="category_id"
                        label="Category"
                        value={formik.values.category_id}
                        onChange={formik.handleChange}
                        error={formik.touched.category_id && Boolean(formik.errors.category_id)}
                        helperText={formik.touched.category_id && formik.errors.category_id}
                    >
                        {lookup.category.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.category}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        disabled={role == 'User'}
                        fullWidth
                        select
                        id="priority_id"
                        name="priority_id"
                        label="Priority"
                        value={formik.values.priority_id}
                        onChange={formik.handleChange}
                        error={formik.touched.priority_id && Boolean(formik.errors.priority_id)}
                        helperText={formik.touched.priority_id && formik.errors.priority_id}
                    >
                        {lookup.priority.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.priority_level}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        fullWidth
                        select
                        id="status_id"
                        name="status_id"
                        label="Status"
                        value={formik.values.status_id}
                        onChange={formik.handleChange}
                        error={formik.touched.status_id && Boolean(formik.errors.status_id)}
                        helperText={formik.touched.status_id && formik.errors.status_id}
                    >
                        {lookup.status.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.status}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                { role == "Admin" ? <TextField
                    fullWidth
                    select
                    id="assign_user_id"
                    name="assign_user_id"
                    label="Assign to"
                    value={formik.values.assign_user_id}
                    onChange={formik.handleChange}
                    error={formik.touched.assign_user_id && Boolean(formik.errors.assign_user_id)}
                    helperText={formik.touched.assign_user_id && formik.errors.assign_user_id}
                >
                    {users?.map((user) => (
                        <MenuItem key={user.id} value={user.id}>
                            {user.name}
                        </MenuItem>
                    ))}
                </TextField> : null}
                <Button
                    sx={{textTransform: "none"}}
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                >
                    Edit
                </Button>
            </form>
        </div>
    )
}

export default EditTicketForm