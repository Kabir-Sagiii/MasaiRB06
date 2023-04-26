import { useState } from "react";
import Child from "./Child";
var parentStyle = {
  width: "500px",
  boxShadow: "0 0 10px black",
  padding: "30px",
  margin: "100px auto",
  textAlign: "center",
};
function Parent(props) {
  const [state, setState] = useState("Dummy Data");
  return (
    <div style={parentStyle}>
      <h2>Parent Component</h2>
      <p>{state}</p>
      <Child setState={setState} />
    </div>
  );
}

export default Parent;
