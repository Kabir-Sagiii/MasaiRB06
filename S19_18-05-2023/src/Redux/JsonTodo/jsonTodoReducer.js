const jsonTodoInit = {
  jsonTodo: [],
  isLoading: false,
  isError: false,
};

const jsonTodoReducer = (state = jsonTodoInit, action) => {
  //loading
  switch (action.type) {
    case "loading": {
      return {
        ...jsonTodoInit,
        isLoading: true,
        isError: false,
      };
    }
    case "error": {
      return {
        ...jsonTodoInit,
        isLoading: false,
        isError: true,
      };
    }
    case "jsontodo": {
      return {
        ...jsonTodoInit,
        jsonTodo: action.payload,
        isLoading: false,
        isError: false,
      };
    }
  }
  return state;
};

export default jsonTodoReducer;
