export const productReducer = (state, action) => {
  //action = {type:"",payload:data}
  switch (action.type) {
    case "LOADING": {
      return {
        loading: true,
        error: false,
        data: [],
      };
    }
    case "ERROR": {
      return {
        loading: false,
        error: true,
        data: [],
      };
    }
    case "SUCCESS": {
      return {
        loading: false,
        error: false,
        data: action.payload,
      };
    }
  }
};
