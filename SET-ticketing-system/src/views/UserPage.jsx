import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'

const UserPage = () => {
  // const { users } = useSelector(state => state.user)
  // const dispatch = useDispatch()
  // const setUsers = (users) => dispatch({ type: 'SET_USER_STATE', payload: {users} })
  
  const { id } = useParams();
  const fetchUser = () => {
    return axios.get(`http://localhost:4000/users/${id}`)
  }
  const { data, refetch } = useQuery(['user'], fetchUser )

  // console.log(data.data)

  const navigate = useNavigate();
  
  
  
  
  return (
    <>
      <h2>
        This is user page {id}
      </h2>
      <h4>{data.data.id}</h4>
      <h4>{data.data.name}</h4>
      <h4>{data.data.email}</h4>
      <h4>{data.data.role}</h4>

      
      <button 
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
          refetch
        }}
      >
        Back
      </button>
    </>
  );
}

export default UserPage;