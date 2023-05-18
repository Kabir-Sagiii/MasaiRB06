import React from "react";
import { deleteUser, getUsers } from "../API/api";
import { useDispatch } from "react-redux";
import {
  loadingActionCreator,
  errorActionCreator,
  todoActionCreator,
} from "../../Redux/JsonTodo/actionCreator";

function TodoList({ user }) {
  const dispatch = useDispatch();
  const deleteUserName = (id) => {
    deleteUser(id).then(() => {
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
      <span style={{ fontSize: "24px" }}>{user.name}</span> {"------------>"}
      <button
        onClick={() => {
          deleteUserName(user.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoList;
