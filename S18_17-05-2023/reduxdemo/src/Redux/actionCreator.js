import { TODO, INC, DEC } from "./actiontypes";
export const todoActionCreator = (data) => {
  return {
    type: TODO,
    payload: data,
  };
};

export const increaseCountActionCreator = (data) => {
  return {
    type: INC,
    payload: data,
  };
};

export const decreaseCountActionCreator = (data) => {
  return {
    type: DEC,
    payload: data,
  };
};
