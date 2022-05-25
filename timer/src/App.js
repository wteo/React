import React, { useState, useEffect } from 'react';

function App () {

  const [enteredCountdown, setEnteredCountdown] = useState("Click here to start the countdown.");
  const [clicked, setClicked] = useState(false);
  const [enteredNum, setEnteredNum] = useState(100);

  const countdownHandler = () => {
    setEnteredCountdown("Counting down...");
    setClicked(true);
  };

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setEnteredNum(enteredNum - 1);
      }, 500);
    }
    return () => {
      if (!clicked && enteredNum === 100) {
        clearTimeout();
        setEnteredNum(100); // To bring countdown number back to 100. If not, enteredNum will go back to its last current value.
      }
    };
  }, [clicked, enteredNum]);

  const pauseHandler = () => {
    setEnteredCountdown("Resume");
    setClicked(false);
  };

  const resetHandler = () => {
    setEnteredCountdown("Click here to start the countdown.");
    setEnteredNum(100);
    setClicked(false);
  };

  return (
  <React.Fragment>
    <button onClick={countdownHandler}>{enteredCountdown}</button>
    <p>{enteredNum}</p>
    {clicked ? <button onClick={pauseHandler}>Pause</button> : ""}
    {clicked ? <button onClick={resetHandler}>Reset</button> : ""}
  </React.Fragment>);
}

export default App;