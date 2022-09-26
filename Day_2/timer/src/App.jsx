import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import RandomButton from './components/RandomButton';
import DisplayBox from './components/DisplayBox';

function App() {

  // const [theTime, setTimer] = useState({hrs: 0, mins: 0, secs:0})
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const hourValue = parseInt(event.target[0].value);
    const minuteValue = parseInt(event.target[1].value);
    const secondValue = parseInt(event.target[2].value);
    // setTimer({hrs: hourValue, mins: minuteValue, secs: secondValue});
    if(isNaN(hourValue)){
      setHour(0)
    } else setHour(hourValue);

    if(isNaN(minuteValue)){
      setMinute(0)
    } else setMinute(minuteValue);

    if(isNaN(secondValue)){
      setSecond(0)
    } else setSecond(secondValue);
  };
  
  const tick = () => {
    if (hour === 0 && minute === 0 && second === 0) {
      setHour(0); setMinute(0); setSecond(0)
    } else if (minute === 0 && second === 0) {
      setHour(hour - 1); setMinute(59); setSecond(59)
    } else if (second === 0) {
      setHour(hour); setMinute(minute - 1); setSecond(59)
    } else {
      setHour(hour); setMinute(minute); setSecond(second -1)
    }
  };

  const startTimer = () => {
    useEffect(() => {
      const timerId = setInterval(() => tick(), 1000);
      return () => clearInterval(timerId);
    });
  };

  const resetTimer = () => {
    setHour(0); setMinute(0); setSecond(0)
  }

  return (
    <div id="App">
      <div style={{display: "flex"}}>
        <DisplayBox>{`${hour.toString().padStart(2, '0')}`}</DisplayBox>
        <DisplayBox>{`${minute.toString().padStart(2, '0')}`}</DisplayBox>
        <DisplayBox>{`${second.toString().padStart(2, '0')}`}</DisplayBox>
      </div>
      <div id="receiveInput">
        <form onSubmit={(event) => handleSubmit(event)}>
          :<input max={24} min={0} type="number" placeholder="hours"/>
          :<input max={59} min={0} type="number" placeholder="minutes"/>
          :<input max={59} min={0} type="number" placeholder="seconds"/>
          <RandomButton onClick={startTimer()} type="submit">start</RandomButton>
        </form>
        <RandomButton onClick={() => resetTimer()}>reset</RandomButton>
      </div>
    </div>
  );
}

export default App;