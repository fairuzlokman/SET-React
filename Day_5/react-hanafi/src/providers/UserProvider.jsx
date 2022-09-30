import UserContext from "../contexts/UserContext";
import user from "../user";

const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  );
};
export default UserProvider;