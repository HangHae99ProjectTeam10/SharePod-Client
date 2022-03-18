import { GET_BOARD } from "../../constants/ActionTypes";

export const getBoard = (board) => {
  return (dispatch) => {
    dispatch({
      type: GET_BOARD,
      payload: board,
    });
  };
};
