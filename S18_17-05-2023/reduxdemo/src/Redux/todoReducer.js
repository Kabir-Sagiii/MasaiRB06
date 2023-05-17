var initdata = {
  todo: "",
  count: 0,
};

const todoReducer = (store = initdata, action) => {
  if (action.type === "TODO") {
    return {
      ...store,
      todo: action.payload,
    };
  } else if (action.type === "INC") {
    return {
      ...store,
      count: store.count + action.payload,
    };
  } else if (action.type === "DEC") {
    return {
      ...store,
      count: store.count - action.payload,
    };
  }

  return store;
};

export default todoReducer;
