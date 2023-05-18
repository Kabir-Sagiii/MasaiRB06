import { legacy_createStore as createrStore, combineReducers } from "redux";
import todoReducer from "./todoReducer";
import jsonTodoReducer from "./JsonTodo/jsonTodoReducer";

const combinedReducer = combineReducers({ todoReducer, jsonTodoReducer });

let myStore = createrStore(
  combinedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

myStore.subscribe(() => {
  console.log(myStore.getState());
});

export default myStore;
