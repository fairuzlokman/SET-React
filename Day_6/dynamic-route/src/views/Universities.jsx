import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUniversities } from "../api/university";
import useAuth from "../hooks/useAuth";

const Universities = () => {

    const { universities } = useSelector(state => state.user) 
    const dispatch = useDispatch();
    const setUniversities = (universities) => dispatch({ type: 'SET_USER_STATE' , payload: {universities} }) 


    const fetchUniversities = async () => {
        const res = await getUniversities();
        console.log(res);
        if(res.status === 200 && res.data && Array.isArray(res.data)) {
            setUniversities(res.data);
        }
    }

    useEffect(() => {
        fetchUniversities()
    }, [])

    return (
        <>
        <h2>This is universities list page (protected)</h2>

        <ul>
        { universities.map((u,i) => (
            <li key={i}>
            <div>{u.name}</div>
            </li>
        ))}
        </ul>

        </>
    );
}

export default Universities;