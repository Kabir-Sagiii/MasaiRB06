import { useState, useRef } from "react";
var style = {
  width: "500px",
  boxShadow: "0 0 10px red",
  padding: "50px",
  margin: "100px auto",
};
function Timer(props) {
  const [timer, setTimer] = useState(0);
  const [timerid, setTimerid] = useState(0);
  let myReference = useRef(null); // myReference = {current:null} myReference.current = "MAsai"

  let timerId = 0; // re-created timerId = undefined

  const startTimer = () => {
    myReference.current = setInterval(() => {
      //id=1 timerId=1
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    // setTimerid(
    //   setInterval(() => {
    //     //id=1 timerId=1
    //     setTimer((prevTimer) => prevTimer + 1);
    //   }, 1000)
    // );
  };

  const stopTimer = () => {
    clearInterval(myReference.current); // undefined
  };
  return (
    <div style={style}>
      <h2 style={{ fontSize: "22px" }}>Timer Value is {timer}</h2>
      <button onClick={startTimer}>Start</button>&nbsp;&nbsp;&nbsp;
      <button onClick={stopTimer}>Stop</button>&nbsp;&nbsp;&nbsp;
      <button>Reset</button>
    </div>
  );
}

export default Timer;
