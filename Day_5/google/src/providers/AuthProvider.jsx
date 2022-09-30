import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginAPI } from '../../../../Day_6/dynamic-route/src/api/auth';
import { AuthContext } from '../contexts/AuthContext';

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    // const [user, setUser] = useState(null);
    const [details, setDetails] = useState({fname: "", lname: "", email: "", password: ""});
    useEffect(() => console.log(details), [details])
    
    const navigate = useNavigate();

    const signup = (values) => {
        setDetails({
            fname: values.firstName,
            lname: values.lastName,
            email: values.email,
            password: values.password,
        });
        navigate('/login')
    }

    const login = (values) => {
        if(values.email === details.email && values.password === details.password) {
            setToken("2340987654dxderftgyuni")
            navigate('/')
            console.log(token);
        } else alert("Wrong email/password!")
    }

    const logout = () => {
        setToken(null)
        navigate('/logout')
        setTimeout(viewLogout, 1000)
    }

    const viewLogout = () => {
        navigate('/')
    }

    return (
        <AuthContext.Provider
            value={{
                details,
                token,
                login,
                logout,
                signup,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
