import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, InputAdornment, TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const phoneRegex = /^(\+?6?01)[0-46-9]-*[0-9]{7,8}$/

const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .max(20, 'Your name is too long')
    .required('Please enter your name'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Please enter your email address'),
  phone: yup
    .string('Enter your phone number')
    .matches(phoneRegex, "That doesn't look like a phone number")
    // .integer("A phone number can't include a decimal point")
    .required('Please enter your phone number'),
});

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className='flex flex-col p-20 gap-5 w-full sm:pl-0' 
    onSubmit={formik.handleSubmit}>
      <div className='flex flex-col w-full sm:flex-row gap-5'>
        <div className='flex flex-col gap-5 w-full sm:w-[120%]'>
          <TextField
            id="name"
            label="Name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{'& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor:"white"
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'grey',
              }}
            }}
            />
            <TextField
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputProps={{
                startAdornment: <InputAdornment position='start'><EmailIcon /></InputAdornment>
              }}
              sx={{'& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor:"white"
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'grey',
                }}
              }}
            />
          <TextField
            id="phone"
            name="phone"
            type="text"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            InputProps={{
              startAdornment: <InputAdornment position='start'><CallIcon /></InputAdornment>,
            }}
            sx={{'& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor:"white"
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'grey',
              }}
            }}
          />
        </div>
        <TextField
          id="message"
          label="Message"
          multiline
          minRows={7.65}
          name="message"
          type="text"
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          sx={{'& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor:"white"
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'grey',
            }},
            width: "100%"
          }}
        />
      </div>
      <Button color="primary" variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default FormikForm