import { useEffect, useState } from 'react';
import './App.css'
import { LoginForm } from './components/LoginForm';
import { SignUpForm } from './components/SignUpForm';

function App() {
  
  const [details, setDetails] = useState({fname: "", lname: "", email: "", password: ""});
  // const [signup, setSignup] = useState("block")
  // const [login, setLogin] = useState("none")
  // const [page, setPage] = useState("none")
  const [load, setLoad] = useState({signup: "block", login: "none", page: "none"})

  useEffect(() => {console.log(details)}, [details])

  const handleSignup = (values) => {
    // alert(JSON.stringify(values, null, 2));
    setDetails({
        fname: values.firstName,
        lname: values.lastName,
        email: values.email,
        password: values.password,
    });
    // setSignup("none")
    // setLogin("block")
    setLoad({signup: "none", login: "block", page: "none"})
  }

  const handleLogin = (values) => {
    console.log(details)
    if(values.email === details.email && values.password === details.password){
      // setLogin("none")
      // setPage("block")
      setLoad({signup: "none", login: "none", page: "block"})
      // alert(JSON.stringify(values, null, 2));
    } else alert("Wrong email/password!")
  }

  return (
    <div className="App">
      <SignUpForm 
        display={load.signup}
        onSubmit = {(values) => handleSignup(values)}/>

      <LoginForm
        display={load.login}
        onSubmit = {(values) => handleLogin(values)}/>
        
      <h1 style={{display: load.page}}>Welcome Aboard,
        <span style={{color: "#1976d2"}}>{" "+details.fname+" "+details.lname+"!"}</span>
      </h1>
    </div>
  )
}

export default App
