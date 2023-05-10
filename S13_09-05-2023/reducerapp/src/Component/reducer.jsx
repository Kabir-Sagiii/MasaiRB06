export const reducer = (state, action) => {
  // logic to update state

  // call this logic if user click on inc button
  if (action.type === "inc") {
    return (state = { count: state.count + 1 });
  }

  // call this logic if user click on dec button
  if (action.type === "dec") {
    return (state = { count: state.count - 1 });
  }

  // call this logic if user click on reset button
  if (action.type === "reset") {
    return (state = { count: 0 });
  }

  return state;
};

// const incCount = () => {
//   // 20 lines
//   setCount(count + 5);
// };

// const decCount = () => {
//   //30lines
//   setCount(count - 2);
// };

// const resetCount = () => {
//   //50 lines
//   setCount(0);
// };
