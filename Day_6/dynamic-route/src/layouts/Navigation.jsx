import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navigation = () => {
  const linkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal'
    }
  };

  const { logout, token } = useAuth();

  return (
    <nav
      style={{
        borderBottom: '1px solid #000',
        padding: '1rem'
      }}
    >
      <NavLink to={'/home'} className={'link'} style={linkStyle}>Home</NavLink>
      <NavLink to={'/users'} className={'link'} style={linkStyle}>Users</NavLink>
      <NavLink to={'/admins'} className={'link'} style={(prop) => linkStyle(prop)}>Admins</NavLink>

      {token ? <button onClick={() => logout()}>Logout</button> : null}
    </nav>
  );
}

export default Navigation;