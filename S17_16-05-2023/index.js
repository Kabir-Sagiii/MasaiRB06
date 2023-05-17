//OOPs
class Store {
  // Object-----Reducer----getState()----dispatch()---action
  state;
  reducer;
  constructor(reducer, initialdata) {
    this.state = initialdata;
    this.reducer = reducer;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }
  getState() {
    return this.state;
  }
}

const reducer = (state, action) => {
  if (action.type === "INC") {
    return {
      count: state.count + action.data,
    };
  }
  return state;
};

let store = new Store(reducer, { count: 0 }); // I want to add default Data

console.log(store.getState());

store.dispatch({
  type: "INC",
  data: 5,
});

console.log(store.getState());

// 1. Data inside the State Should be updated using Reducer Function

// 2. Reducer function should be called using dispatch function Only

//3. Whatever Reducer will return it should be updated in the state

//4. Reducer function should have access to the state;

//5 Reducer Should return initial State or it should return New State based on Action Object

//6 Reducer Should receive Action Object using Dispatch only.

//7. Store Class Should Contain one function or method which returns current State.
