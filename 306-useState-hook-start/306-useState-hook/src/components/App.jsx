import React, { useState } from "react";
function App() {
  setInterval(getTime, 1000)
  const time = new Date().toLocaleTimeString();
  const [newTime, setTime] = useState(time);
  console.log(time);

  function getTime() {
    const now = new Date().toLocaleTimeString();
    setTime(now);
  }
  
  return (
    <div className="container">
      <h1>{newTime}</h1>
      <button onClick={getTime}>GET TIME</button>
    </div>)
}
// import { useState, useEffect } from "react";

// function Clock() {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());

//   useEffect(() => {
//     // 1. Start the interval
//     const interval = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000); // 1ms is very heavy, try 1000ms (1 sec) for a clock!

//     // 2. The Cleanup: This STOPS the clock if the component unmounts
//     return () => clearInterval(interval);
//   }, []); 

//   return <h1>{time}</h1>;
// }

export default App;
