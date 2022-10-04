import { Link } from 'react-router-dom'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UsersPage = () => {
  const { users } = useSelector(state => state.user)
  // const dispatch = useDispatch()
  // const setUsers = (users) => dispatch({ type: 'SET_USER_STATE', payload: {users} })

  console.log(users);
  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {
          users.map((u,i) => (
            <li key={i}>
              <Link to={`/users/${u.id}`}>{u.fullName}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default UsersPage