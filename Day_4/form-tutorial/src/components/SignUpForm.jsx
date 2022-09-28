import { Form, Formik } from 'formik';
import React from 'react'
import * as yup from "yup";
import { CustomButton } from './CustomButton';
import { FormContent } from './FormContent';
import Button from '@mui/material/Button';

export const SignUpForm = ({display, ...restProps}) => {
    
    return (
        <div style={{
            display: display,
            padding: "80px",
            boxShadow: "10px 10px 5px #aaaaaa",
            borderRadius: "20px",
        }} className="form-container">
            <h1>Sign up</h1>
            <Formik
                initialValues= {{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                }}
            
                validationSchema= {yup.object({
                    firstName: yup
                        .string()
                        .max(15, "Must be less than 15 character.")
                        .required("Required"),
                    lastName: yup
                        .string()
                        .max(20, "Must be less than 20 character.")
                        .required("Required"),
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
                            <FormContent name="firstName" type="text" placeholder="First Name" />
                            <FormContent name="lastName" type="text" placeholder="Last Name" />
                            <FormContent name="email" type="email" placeholder="Email" />
                            <FormContent name="password" type="password" placeholder="Password" />
                            {/* <CustomButton type="submit">Sign Up</CustomButton> */}
                            <Button type="submit" variant="contained">Sign Up</Button>
                        </Form>
                )}
            </Formik>
        </div>
    );
}
