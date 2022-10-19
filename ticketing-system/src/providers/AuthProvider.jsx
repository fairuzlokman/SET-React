import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';
import { getUsers, loginUser, signUpUser } from '../api/users';
import { getTickets } from '../api/tickets';

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null)
    const [thisUser, setThisUser] = useState(null)
    const [loginError, setLoginError] = useState(false)
    const [signupError, setSignupError] = useState(false)

    // Get users and tickets
    const [users, setUsers] = useState([])
    const [tickets, setTickets] = useState([])

    const navigate = useNavigate();
    
    const signup = async (test) => {
        const { status } = await signUpUser(test);
        
        if(status == 201){
            alert("Thanks for signing up.")
            navigate('/login')
            setSignupError(false)
        } else setSignupError(true)
    }

    const login = async (test) => {
        const { data } = await loginUser(test);
        
        if(data?.data?.token){
            console.log(data);
            setToken(data?.data?.token)
            setRole(data?.data?.user?.role)
            setThisUser(data?.data?.user)
            navigate('/')
            setLoginError(false)
            alert(data?.message)
            
            const { data:userData } = await getUsers(data?.data?.token)
            setUsers(userData?.allUsers)

            const { data:ticketData } = await getTickets(data?.data?.token)
            setTickets(ticketData?.data)

        } else setLoginError(true)
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
                token,
                login,
                logout,
                signup,
                role,
                thisUser,
                navigate,
                loginError,
                signupError,
                users,
                tickets,
                setTickets
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
