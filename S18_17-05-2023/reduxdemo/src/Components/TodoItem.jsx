import React from "react";
import { useSelector } from "react-redux";

function TodoItem(props) {
  const { todo } = useSelector((store) => {
    return store;
  });
  return (
    <div>
      <h2>Todo Item </h2>
      <p>{todo}</p>
    </div>
  );
}

export default TodoItem;
