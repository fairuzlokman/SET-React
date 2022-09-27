import React from 'react';

import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as yup from "yup";
import { CustomButton } from '../components/CustomButton';

// const validate = (values) => {
//     const errors = {};
//     if(!values.firstName){
//         errors.firstName = "Required";
//     } else if (values.firstName.length > 15) {
//         errors.firstName = "Must be 15 characters or less"
//     }
    
//     if(!values.lastName){
//         errors.lastName = "Required";
//     } else if (values.lastName.length > 15) {
//         errors.lastName = "Must be 20 characters or less"
//     }
    
//     if(!values.email){
//         errors.email = "Required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = "Invalid email address"
//     }

//     return errors
// }   

export const FormTutorial = (props) => {
    // const formik = useFormik({
    //     initialValues: {
    //         firstName: "",
    //         lastName: "",
    //         email: "",
    //     },
        
    //     validationSchema: yup.object({
    //         firstName: yup
    //             .string()
    //             .max(15, "Must be less than 15 character.")
    //             .required("Required"),
    //         lastName: yup
    //             .string()
    //             .max(20, "Must be less than 20 character.")
    //             .required("Required"),
    //         email: yup
    //             .string()
    //             .email("Invalid email")
    //             .required("Required"),
    //     }),

    //     onSubmit: (values) => {
    //             alert(JSON.stringify(values, null, 2));
    //         }
    //     })
    
    return (
        <Formik
            initialValues= {{
                firstName: "",
                lastName: "",
                email: "",
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
            onSubmit = {(values) => {
                            alert(JSON.stringify(values, null, 2));
            }}
        >
            {(formik)=>(
                <div className="form-container">
                    <Form>
                        <div className="input-container">
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name="firstName" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" />
                            <ErrorMessage name="password" />
                        </div>
                        <CustomButton>Sign Up</CustomButton>
                    </Form>
                </div>
            )}
        </Formik>
    );
};
