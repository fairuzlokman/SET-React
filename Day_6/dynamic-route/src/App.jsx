import './App.css'
import { Route, Routes } from 'react-router-dom'
import useAuth from './hooks/useAuth';
import Layout from './layouts/Layout';
import Home from './views/Home';
import ProtectedRoute from './routes/ProtectedRoutes';
import User from './views/User';
import Users from './views/Users';
import Admins from './views/Admins';
import NoMatch from './views/NoMatch';
import { useSelector } from 'react-redux';

function App() {
  const { user } = useAuth();

  const data = useSelector(state => state);

  console.log(data);

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path={'home'} element={<Home/>} />

        {/* protection lvl 1 */}
        <Route path={'users'} element={<ProtectedRoute><Users/></ProtectedRoute>}/>
        <Route path={'users/:id'} element={<ProtectedRoute><User/></ProtectedRoute>}/>

        {/* protection lvl 2 */}
        <Route path={'admins'} element={<ProtectedRoute isAllowed={user?.roles.includes('admin')} redirectPath={'/users'}><Admins/></ProtectedRoute>}/>

        <Route path={'*'} element={<NoMatch/>} />
      </Route>
    </Routes>
  )
}

export default App
