import React from 'react'
import LoginForm from '../components/LoginForm'
import useAuth from '../hooks/useAuth'

const LoginPage = () => {
  return (
    <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <LoginForm />
    </div>
  )
}

export default LoginPage