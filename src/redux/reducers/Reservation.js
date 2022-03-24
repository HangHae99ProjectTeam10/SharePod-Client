import { ADD_RESERVATION } from "../../constants/ActionTypes";

const INIT_STATE = {};

const Reservation = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_RESERVATION: {
      return {};
    }

    default:
      return state;
  }
};
export default Reservation;
