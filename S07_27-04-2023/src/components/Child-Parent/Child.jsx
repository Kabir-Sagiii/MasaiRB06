import { useState } from "react";
var childStyle = {
  boxShadow: "0 0 10px red",
  padding: "30px",
  marginTop: "50px",
};
function Child({ setState }) {
  const [data, setData] = useState("");
  return (
    <div style={childStyle}>
      <h2>Child Component</h2>
      <input
        type="text"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setState(data);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Child;
