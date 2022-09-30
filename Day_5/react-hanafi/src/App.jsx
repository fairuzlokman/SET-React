import "./App.css";
import ThemeContext from "./contexts/ThemeContext";
import UserContext from "./contexts/UserContext";
import useTheme from "./hooks/useTheme";
import { Navigation } from "./layout/Navigation";
import { Home } from "./views/Home";
import { Users } from "./views/Users";
import { Route, Routes } from "react-router-dom"

function App() {
  // const theme = useTheme(ThemeContext);
  // const user = useUser(UserContext);
  return (
    <>
      {/* <div className="flex-col align-center justify-center" style={{color: theme.color}}>
      <p>test</p>
      </div> */}
      <Navigation/>
      <Routes>
        <Route index element={<Home/>} /> // default page
        <Route path={'home'} element={<Home/>} />
        <Route path={'users'} element={<Users/>} />
        {/* <Route path={'*'} element={<NoMatch/>} /> // no match page */}
      </Routes>
    </>
  );
}

export default App;