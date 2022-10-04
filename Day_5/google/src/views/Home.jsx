import { Navigation } from "../components/Navigation"
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../api/users';
import { useEffect } from 'react';

export const Home = () => {
  const dispatch = useDispatch();
  const setUsers = (users) => dispatch({ type: 'SET_USER_STATE', payload: {users} })

  return (
    <div id="Google">
          <p style={{fontSize: "100px"}}>
            Google
          </p>
          <div id="searchBar">
              <span style={{backgroundColor: "transparent", color: "#8c9297"}} class="material-symbols-outlined">search</span>
              <input id="searchInput" type="text" placeholder="Search Google or type a URL" />
          </div>
    </div>
    )
  }