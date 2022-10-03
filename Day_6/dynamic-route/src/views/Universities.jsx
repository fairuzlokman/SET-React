import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Universities = () => {

  const { universities } = useSelector(state => state.user) 

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