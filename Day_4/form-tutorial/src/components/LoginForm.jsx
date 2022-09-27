import { Form, Formik } from 'formik';
import React from 'react'
import * as yup from "yup";
import { CustomButton } from './CustomButton';
import { FormContent } from './FormContent';

export const LoginForm = ({display, ...restProps}) => {
    return (
        <div style={{display: display}} className="form-container">
            <h1>Login</h1>
            <Formik
                initialValues= {{
                    email: "",
                    password: "",
                }}
            
                validationSchema= {yup.object({
                    firstName: yup
                        .string()
                        .max(15, "Must be less than 15 character."),
                        // .required("Required"),
                    lastName: yup
                        .string()
                        .max(20, "Must be less than 20 character."),
                        // .required("Required"),
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
                            <CustomButton type="submit">Login</CustomButton>
                        </Form>
                )}
            </Formik>
        </div>
    );
}
