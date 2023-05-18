import { useState } from "react";
import myStore from "../Redux/Store";
import { useDispatch } from "react-redux";
import { todoActionCreator } from "../Redux/actionCreator";

function Todo(props) {
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const handleData = () => {
    // myStore.dispatch({
    //   type: "TODO",
    //   payload: state,
    // });

    dispatch(todoActionCreator(state));
  };
  return (
    <div>
      <h2>Todo Component</h2>
      <input
        type="text"
        placeholder="Enter SomeText"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button onClick={handleData}>Submit</button>
    </div>
  );
}

export default Todo;
