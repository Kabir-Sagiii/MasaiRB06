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
  const [data, setData] = useState("");
  const [childdata, setChildData] = useState("");
  return (
    <div style={parentStyle}>
      <h2>Parent Component</h2>
      <input
        onChange={(event) => {
          setData(event.target.value);
        }}
        type="text"
        placeholder="Enter Text"
      />
      <button
        onClick={() => {
          setChildData(data);
        }}
      >
        Submit
      </button>
      <Child parentdata={childdata} />
    </div>
  );
}

export default Parent;
