import { JSONTODO, LOADING, ERROR } from "./actionTypes";

export const todoActionCreator = (data) => {
  return {
    type: JSONTODO,
    payload: data,
  };
};

export const loadingActionCreator = () => {
  return {
    type: LOADING,
  };
};

export const errorActionCreator = () => {
  return {
    type: ERROR,
  };
};
