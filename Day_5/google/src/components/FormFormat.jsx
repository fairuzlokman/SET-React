import React from 'react';

import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as yup from "yup";
import { CustomButton } from '../components/CustomButton';
import { FormContent } from './FormContent';

export const FormFormat = ({children}) => {
    
    return (
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
            onSubmit = {(values) => {
                            alert(JSON.stringify(values, null, 2));
                            console.log(values.password);
            }}
        >
            {(formik)=>(
                <div className="form-container">
                    <Form>
                        {children}
                    </Form>
                </div>
            )}
        </Formik>
    );
};
