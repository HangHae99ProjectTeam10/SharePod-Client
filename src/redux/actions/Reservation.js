import {
  ADD_RESERVATION,
  GET_RESERVATION_REQUEST_LIST,
} from "constants/ActionTypes";

export const getReservationRequestList = (reservation_list) => {
  return (dispatch) => {
    dispatch({
      type: GET_RESERVATION_REQUEST_LIST,
      payload: reservation_list,
    });
  };
};

export const addReservation = (reservation) => {
  return (dispatch) => {
    dispatch({
      type: ADD_RESERVATION,
      payload: reservation,
    });
  };
};
