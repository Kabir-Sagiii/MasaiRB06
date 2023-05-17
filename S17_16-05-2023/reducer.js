let initialState = {
  count: 0,
};
const reducer = (store = initialState, action) => {
  if (action.type === "INC") {
    return {
      count: action.payload,
    };
  } else if (action.type === "DEC") {
    return {
      count: action.data,
    };
  }

  return store;
};

export default reducer;
