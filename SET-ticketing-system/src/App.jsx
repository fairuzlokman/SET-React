import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './views/LoginPage'
import SignUpPage from './views/SignUpPage'
import Layout from './views/Layout'
import UsersPage from './views/UsersPage'
import TicketsPage from './views/TicketsPage'
import UserPage from './views/UserPage'
import TicketPage from './views/TicketPage'

function App({data}) {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />

          <Route path='/users' element={<UsersPage />} />
          <Route data={data} path='/users/:id' element={<UserPage />} />

          <Route path='/tickets' element={<TicketsPage />} />
          <Route path='/tickets/:id' element={<TicketPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
