import './App.css';
import Clock from './components/date';
import React, { useState } from 'react';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  setInterval(()=>{
    setTime(new Date().toLocaleTimeString())
  }, 5000)

  return (
    <div className="App">
      <Clock date={time}/>
    </div>
  );
}

export default App;
