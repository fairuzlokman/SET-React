import { useEffect } from "react";
import { useDispatch, useSelector, Provider as ReduxProvider } from "react-redux";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { login } = useAuth();

  const { title, description } = useSelector(state => state.home);

  const dispatch = useDispatch();
  const setTitleAndDescption = (title, description) => dispatch({ type: 'SET_HOME_STATE' , payload: {title: title, description: description} })

  useEffect(() => {
    setTitleAndDescption('HOME PAGE' , 'This is the home page');
  }, [])

  return (
    <>
      <h2>{title} (public)</h2>
      <h4>{description}</h4>

      <button onClick={() => login()}>Login</button>
    </>
  );
}

export default Home;