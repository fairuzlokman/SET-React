import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../api/users';

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [details, setDetails] = useState({fname: "", lname: "", email: "", password: ""});
    useEffect(() => console.log(details), [details])
    
    /**
     * Fetch user data
     */

    const { users } = useSelector(state => state.user)
    
    const dispatch = useDispatch();
    const setUsers = (users) => dispatch({ type: 'SET_USER_STATE', payload: {users} })

    const fetchUsers = async () => {
        const res = await getUsers();
        if(res.status === 200 && res.data) {
            setUsers(res.data)
        }
    }
    useEffect(() => {fetchUsers()}, [])
    /**
     * Finish fetching process
     */

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
            console.log(token, 'hello');
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
                users
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
