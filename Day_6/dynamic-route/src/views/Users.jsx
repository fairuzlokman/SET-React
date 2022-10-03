import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Users = () => {

  const { token } = useAuth();

  const users = [
    { id: 1, fullName: 'Vincent' },
    { id: 2, fullName: 'Hanafi' },
    { id: 3, fullName: 'Rafi' },
  ];
  return (
    <>
      <h2>This is the users page (protected)</h2>

      <h2>Auth token: {token}</h2>

      <ul>
      { users.map((u,i) => (
        <li key={i}>
          <Link to={`/users/${u.id}`}>{u.fullName}</Link>
        </li>
      ))}
      </ul>

      {/* <Outlet/> */}
    </>
  );
}

export default Users;