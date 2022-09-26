import { useState } from 'react'
import './App.css'
import { AlertCounter } from './FunctionalComponent/AlertCounter'
import { ColorPicker } from './FunctionalComponent/ColorPicker'
import Custom from './FunctionalComponent/Custom'
import { Example } from './FunctionalComponent/Example'
import { ExampleTwo } from './FunctionalComponent/ExampleTwo'
import { NamePage } from './FunctionalComponent/NamePage'

function App() {

  return (
    <div className="App">
      <div style={{display: "flex"}}>
        <Example image="Rectangle1.png" />
        <Example image="Rectangle1.png" />
      </div>

      <ExampleTwo />
      <ColorPicker />
      <NamePage />

      {/* <AlertCounter /> */}

      <Custom />
    </div>
  )
}

export default App
