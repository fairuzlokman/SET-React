import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Admins = () => {

  const { token } = useAuth();

  const admins = [
    { id: 1, fullName: 'Admin 1' },
    { id: 2, fullName: 'Admin 2' },
    { id: 3, fullName: 'Admin 3' },
  ];
  return (
    <>
      <h2>This is the admins page (protected only for admin user)</h2>

      <h2>Auth token: {token}</h2>

      <ul>
      { admins.map((a,i) => (
        <li key={i}>
          <Link to={`/users/${a.id}`}>{a.fullName}</Link>
        </li>
      ))}
      </ul>
    </>
  );
}

export default Admins;