import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './views/Layout'
import { Home } from './views/Home'
import ProtectedRoute from './routes/ProtectedRoutes'
import LoginPage from './views/LoginPage'
import SignUpPage from './views/SignUpPage'
import './styles/Form.css'
import UserPage from './views/UserPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='user' element={<ProtectedRoute><UserPage /></ProtectedRoute>} />
          <Route path='about' element={<About />} />
          <Route path='advert' element={<Advert />} />
          <Route path='business' element={<Business />} />
          <Route path='how' element={<How />} />
        </Route>
          <Route path='signup' element={<SignUpPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='*' element={<NoMatch />} />
          <Route path='logout' element={<Logout />} />
      </Routes>
    </div>
  )
}

const About = () => {  
  return (
    <div className="Content">
      <h1>About page</h1>
    </div>
  )
}

const Advert = () => {
  return (
    <div className="Content">
      <h1>Advertising page</h1>
    </div>
  )
}

const Business = () => {
  return (
    <div className="Content">
      <h1>Business page</h1>
    </div>
  )
}

const How = () => {
  return (
    <div className="Content">
      <h1>How Search works?</h1>
    </div>
  )
}

const NoMatch = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '50px'
    }}>
      <h1>Page Not Found</h1>
    </div>
  )
}

const Logout = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '50px'
    }}>
      <h1>See you later!</h1>
    </div>
  )
}

export default App
