import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../api/auth";
import AuthContext from "../contexts/AuthContext";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const login = async () => {
    const { token, user } = await loginAPI();
    console.log(token, user);
    if(token && user) {
      setToken(token);
      setUser(user);
      navigate('/users');
    }
  }

  const logout = () => {
    setToken(null);
  }

  return (
    <AuthContext.Provider 
      value={{
        token,
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;