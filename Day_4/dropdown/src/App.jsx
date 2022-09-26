import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { DropDown } from './components/DropDown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <DropDown />
    </div>
  )
}

export default App
