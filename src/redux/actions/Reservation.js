import { ADD_RESERVATION } from "../../constants/ActionTypes";

export const addReservation = (reservation) => {
  return (dispatch) => {
    dispatch({
      type: ADD_RESERVATION,
      payload: reservation,
    });
  };
};
