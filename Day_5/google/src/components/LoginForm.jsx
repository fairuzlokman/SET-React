import { Form, Formik } from 'formik';
import React from 'react'
import * as yup from "yup";
import { FormContent } from './FormContent';
import Button from '@mui/material/Button';
import useAuth from '../hooks/useAuth';

export const LoginForm = () => {
    const { login } = useAuth();

    return (
        <div className="form-container">
            <h1>Login</h1>
            <Formik
                initialValues= {{
                    email: "",
                    password: "",
                }}
            
                validationSchema= {yup.object({
                    email: yup
                        .string()
                        .email("Invalid email")
                        .required("Required"),
                    password: yup
                        .string()
                        .required("Required"),
                })}

                onSubmit = {(values) => login(values)}
            >
                {(formik)=>(
                    <Form>
                        <FormContent name="email" type="email" placeholder="Email" />
                        <FormContent name="password" type="password" placeholder="Password" />
                        <Button type="submit" variant="contained">Login</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
