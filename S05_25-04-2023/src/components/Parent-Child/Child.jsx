import React from "react";
var childStyle = {
  boxShadow: "0 0 10px red",
  padding: "10px",
  marginTop: "50px",
};
function Child({ parentdata }) {
  return (
    <div style={childStyle}>
      <h2>Child Component</h2>
      <p>{parentdata}</p>
    </div>
  );
}

export default Child;
