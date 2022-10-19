import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './views/Layout'
import Home from './views/Home'
import ProtectedRoute from './routes/ProtectedRoutes'
import LoginPage from './views/LoginPage'
import SignUpPage from './views/SignUpPage'
import './styles/Form.css'
import UserPage from './views/UserPage'
import UserList from './views/UserList'
import TicketList from './views/TicketList'
import useAuth from './hooks/useAuth'

function App() {
  const { role } = useAuth();
  
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='user' element={<ProtectedRoute><UserPage /></ProtectedRoute>} />
          <Route path='userlist' element={<ProtectedRoute isAllowed={role == "Admin"} ><UserList /></ProtectedRoute>} />
          <Route path='ticketlist' element={<ProtectedRoute><TicketList /></ProtectedRoute>} />
        </Route>
          <Route path='signup' element={<SignUpPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='*' element={<NoMatch />} />
          <Route path='logout' element={<Logout />} />
      </Routes>
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
