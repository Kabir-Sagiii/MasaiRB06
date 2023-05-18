import { useEffect } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import { getUsers } from "../API/api";
import { useDispatch, useSelector } from "react-redux";
import {
  todoActionCreator,
  loadingActionCreator,
  errorActionCreator,
} from "../../Redux/JsonTodo/actionCreator";

function Todo(props) {
  const dispatch = useDispatch();
  const { isLoading, isError, jsonTodo } = useSelector((storeData) => {
    //   { todoReducer:{},jsonTodoReducer:{}}
    return storeData.jsonTodoReducer;
  });
  useEffect(() => {
    dispatch(loadingActionCreator());
    getUsers()
      .then((res) => {
        dispatch(todoActionCreator(res.data));
      })
      .catch(() => {
        dispatch(errorActionCreator());
      });
  }, []);

  return (
    <div>
      <TodoAdd />
      <br />
      <br />
      {isLoading ? (
        <h2>Loading ..........</h2>
      ) : isError ? (
        <h2>Something went Wrong</h2>
      ) : (
        <div>
          {" "}
          {jsonTodo.length > 0 &&
            jsonTodo.map((user) => {
              return <TodoList user={user} />;
            })}
        </div>
      )}
    </div>
  );
}

export default Todo;
