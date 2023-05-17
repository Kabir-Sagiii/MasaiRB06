import { legacy_createStore as createrStore } from "redux";
import todoReducer from "./todoReducer";

let myStore = createrStore(todoReducer);

myStore.subscribe(() => {
  console.log(myStore.getState());
});

export default myStore;
