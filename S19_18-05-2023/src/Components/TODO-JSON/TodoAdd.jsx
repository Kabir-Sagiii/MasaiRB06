import { useState } from "react";
import { addUser, getUsers } from "../API/api";
import { useDispatch } from "react-redux";
import {
  loadingActionCreator,
  errorActionCreator,
  todoActionCreator,
} from "../../Redux/JsonTodo/actionCreator";

function TodoAdd(props) {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const addUserName = () => {
    addUser({
      name: state,
    }).then(() => {
      dispatch(loadingActionCreator());
      getUsers()
        .then((res) => {
          dispatch(todoActionCreator(res.data));
        })
        .catch(() => {
          dispatch(errorActionCreator());
        });
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter User Name"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button onClick={addUserName}>Submit</button>
    </div>
  );
}

export default TodoAdd;
