import {
  ADD_RESERVATION,
  GET_RESERVATION_REQUEST_LIST,
} from "../../constants/ActionTypes";

const INIT_STATE = {
  request_list: [],
};

const Reservation = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_RESERVATION: {
      return {};
    }
    case GET_RESERVATION_REQUEST_LIST: {
      return {
        request_list: action.payload,
      };
    }
    default:
      return state;
  }
};
export default Reservation;
