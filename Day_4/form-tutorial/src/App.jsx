import { useEffect, useState } from 'react';
import './App.css'
import { LoginForm } from './components/LoginForm';
import { SignUpForm } from './components/SignUpForm';

function App() {
  
  const [details, setDetails] = useState({fname: "", lname: "", email: "", password: ""});
  const [signup, setSignup] = useState("block")
  const [login, setLogin] = useState("none")
  const [welcome, setWelcome] = useState("none")

  useEffect(() => {console.log(details)}, [details])

  const handleSignup = (values) => {
    alert(JSON.stringify(values, null, 2));
    setDetails({
        fname: values.firstName,
        lname: values.lastName,
        email: values.email,
        password: values.password,
    });
    setSignup("none")
    setLogin("block")
  }

  const handleLogin = (values) => {
    alert(JSON.stringify(values, null, 2));
    console.log(values)
    setLogin("none")
    setWelcome("block")
  }

  return (
    <div className="App">
      <SignUpForm 
        display={signup}
        onSubmit = {(values) => handleSignup(values)}/>

      <LoginForm
        display={login}
        onSubmit = {(values) => handleLogin(values)}/>
        
      <h1 style={{display: welcome}}>Welcome Aboard!</h1>
    </div>
  )
}

export default App
