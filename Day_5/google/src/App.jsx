import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './views/Layout'
import { Home } from './views/Home'

function App() {
  return (
    <div className="App">
      <Routes>
          <Route index element={<Home />} />
        <Route element={<Layout />}>
          <Route path='about' element={<About />} />
          <Route path='advert' element={<Advert />} />
          <Route path='business' element={<Business />} />
          <Route path='how' element={<How />} />
        </Route>
          <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  )
}

const About = () => {
  return (
    <div className="Content">
      <h1>&nbsp;About page</h1>
    </div>
  )
}

const Advert = () => {
  return (
    <div className="Content">
      <h1>&nbsp;Advertising page</h1>
    </div>
  )
}

const Business = () => {
  return (
    <div className="Content">
      <h1>&nbsp;Business page</h1>
    </div>
  )
}

const How = () => {
  return (
    <div className="Content">
      <h1>&nbsp;How Search works?</h1>
    </div>
  )
}

const NoMatch = () => {
  return (
    <div>
      <h1>404 error</h1>
    </div>
  )
}

export default App
