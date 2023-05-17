import store from "./store.js";

console.log(store.getState());

store.dispatch({
  type: "INC",
  payload: 10,
});

console.log(store.getState());

store.dispatch({
  type: "DEC",
  data: 5,
});

console.log(store.getState());
