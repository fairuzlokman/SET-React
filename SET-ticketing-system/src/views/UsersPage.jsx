import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'

const UsersPage = () => {
  // const { users } = useSelector(state => state.user)
  // const dispatch = useDispatch()
  // const setUsers = (users) => dispatch({ type: 'SET_USER_STATE', payload: {users} })
  

  // return (
  //   <div>
  //     <h1>List of Users</h1>
  //     <ul>
  //       {
  //         users.map((u,i) => (
  //           <li key={i}>
  //             <Link to={`/users/${u.id}`}>{u.fullName}</Link>
  //           </li>
  //         ))
  //       }
  //     </ul>
  //   </div>
  // )

  // const []

  const fetchUser = () => {
    return axios.get('http://localhost:4000/users')
  }

  const { data, isLoading, isError, error } = useQuery(['user'], fetchUser, {
    onSuccess: (res) => {console.log('Dapat user', res)},
    onError: (err) => {console.log('Tak dapat', err)}
  })
  console.log(data, "test1")

  return (
    <>
      <h1>Users:</h1>
      <ul>
        {
          data?.data?.map((user) => (
            // < key={user.id}>{user.name}</h3>
            <li key={user.id}>
              <Link to={`/users/${user.id}`} data={user}>{user.name}</Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default UsersPage