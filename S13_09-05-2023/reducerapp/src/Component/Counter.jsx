import { useState, useReducer } from "react";
import { reducer } from "./reducer";

function Counter(props) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      {/* <h2>Counter App</h2> */}
      <h3>Count Value is {state.count}</h3>
      <button
        onClick={() => {
          dispatch({
            type: "inc",
          });
        }}
      >
        Inc Count
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "dec",
          });
        }}
      >
        Dec Count
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "reset",
          });
        }}
      >
        Reset Count
      </button>
    </div>
  );
}

export default Counter;
