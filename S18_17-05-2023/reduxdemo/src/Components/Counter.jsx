import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseCountActionCreator,
  decreaseCountActionCreator,
} from "../Redux/actionCreator";

function Counter(props) {
  const dispatch = useDispatch();
  const { count } = useSelector((storedata) => {
    return storedata;
  });
  return (
    <div>
      <h2>Count Value is {count}</h2>
      <button
        style={{ padding: "5px 20px" }}
        onClick={() => {
          dispatch(increaseCountActionCreator(5));
        }}
      >
        +
      </button>
      &nbsp;&nbsp;
      <button
        style={{ padding: "5px 20px" }}
        onClick={() => {
          dispatch(decreaseCountActionCreator(2));
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
