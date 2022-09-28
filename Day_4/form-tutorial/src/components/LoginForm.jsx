import { Form, Formik } from 'formik';
import React from 'react'
import * as yup from "yup";
import { CustomButton } from './CustomButton';
import { FormContent } from './FormContent';
import Button from '@mui/material/Button';

export const LoginForm = ({display, method, ...restProps}) => {
    return (
        <div style={{
            display: display,
            padding: "80px",
            boxShadow: "10px 10px 5px #aaaaaa",
            borderRadius: "20px",
        }} className="form-container">
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

                {...restProps}
            >
                {(formik)=>(
                    <Form>
                            <FormContent name="email" type="email" placeholder="Email" />
                            <FormContent name="password" type="password" placeholder="Password" />
                            {/* <CustomButton type="submit">Login</CustomButton> */}
                            <Button type="submit" variant="contained">Login</Button>
                        </Form>
                )}
            </Formik>
        </div>
    );
}
