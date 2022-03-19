import { GET_BOARD, ADD_BOARD } from "../../constants/ActionTypes";

export const getBoard = (board) => {
  return (dispatch) => {
    dispatch({
      type: GET_BOARD,
      payload: board,
    });
  };
};

export const addBoard = (board) => {
  return (dispatch) => {
    dispatch({
      type: ADD_BOARD,
      payload: board,
    });
  };
};
