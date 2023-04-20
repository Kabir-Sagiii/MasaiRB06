import { useState } from "react";
var counterStyle = {
  width: "500px",
  padding: "50px",
  textAlign: "center",
  boxShadow: "0 0 10px black",
  margin: "100px auto",
};
function Counter() {
  console.log("hello");
  const [state, setState] = useState(0);

  const increaseCount = () => {
    state = state + 1;
    console.log(state);
    // setState(state + 1); // newstate === prevstate : it will not re-render component
  };
  return (
    <div style={counterStyle}>
      <h2>Count Value to {state}</h2>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
}

export default Counter;
