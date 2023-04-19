import { useState } from "react";
var counterStyle = {
  width: "500px",
  padding: "50px",
  textAlign: "center",
  boxShadow: "0 0 10px black",
  margin: "100px auto",
};
function Counter({ countValue, onClick }) {
  //   const [state, setState] = useState(0);
  //   const [name, setName] = useState("Sagar");
  //re-render : render - calling the component
  //   var countValue = 0;
  const increaseCount = () => {
    onClick(countValue + 1);
    // setState(state + 1);
    // setName("Kabir");
    // countValue = countValue + 1;
    // console.log(countValue);
  };
  return (
    <div style={counterStyle}>
      <h2>Count Value to {countValue}</h2>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
}

export default Counter;
