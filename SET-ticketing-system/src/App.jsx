import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './views/LoginPage'
import SignUpPage from './views/SignUpPage'
import Layout from './views/Layout'
import UsersPage from './views/UsersPage'
import TicketsPage from './views/TicketsPage'
import UserPage from './views/UserPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />

          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/:id' element={<UserPage />} />

          <Route path='/tickets' element={<TicketsPage />} />
          <Route path='/tickets/:id' element={<TicketsPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
