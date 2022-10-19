import React from 'react'
import SignUpForm from '../components/SignUpForm'

const SignUpPage = () => {
  return (
    <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
      <SignUpForm />
    </div>
  )
}

export default SignUpPage