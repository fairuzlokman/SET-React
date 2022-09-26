import { useEffect } from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import MyButton from './components/MyButton';

function App() {
  // logic start
  const [number, setNumber] = useState(1);
  const [number2, setNumber2] = useState(0);
  // const [maxNumber, setMax] = useState(0);
  // const [minNumber, setMin] = useState(0);
  const [limit, setLimit] = useState({max: null, min: null});

  const handleChange = (diff) => {
    // if(number>=0 && number<=10) {
      setNumber(number + diff)
    // }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const value = parseInt(event.target[0].value);
    const maxValue = parseInt(event.target[1].value);
    const minValue = parseInt(event.target[2].value);
    setNumber(value);
    // setMax(maxValue);
    // setMin(minValue);
    setLimit({max: maxValue, min: minValue})
    console.log(limit.max, limit.min)
    console.log("Submitted")
  }
  
  const printHello = () => {
    console.log("Hello");
  }

  const doubleNumber = () => {
    setNumber2(number*2)
  }

  useEffect(() => printHello(), [number]);
  useEffect(() => doubleNumber(), [number]);
  // logic end

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input type="number" placeholder='Start number'/>
        <input type="number" placeholder='Max'/>
        <input type="number" placeholder='Min'/>
        <MyButton type="submit">Submit</MyButton>
      </form>
      <h1>{number}</h1>
      <h2>Number 1</h2>
      <div style={{display: "flex", gap: "5px"}}>
        {/* <MyButton size="large" onClick={() => console.log("Large")} >Button 1</MyButton>
        <MyButton size="standard" onClick={() => console.log("Standard")} disabled={true}>Button 1</MyButton>
        <MyButton size="small" onClick={() => console.log("Small")}></MyButton>
        <MyButton size="tiny" onClick={() => console.log("Tiny")}></MyButton> */}
        <MyButton disabled={number >= limit.max} onClick={()=>{handleChange(+1)}}>+1</MyButton>
        <MyButton disabled={number <= limit.min} onClick={()=>{handleChange(-1)}}>-1</MyButton>
      </div>
      <h1>{number2}</h1>
      <h2>Number 2</h2>
    </div>
  );
}

export default App
