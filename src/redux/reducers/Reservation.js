import {
  ADD_RESERVATION,
  GET_RESERVATION_REQUEST_LIST,
  GET_CERTIFICATION_LIST,
  POST_CERTIFICATION_IMAGE,
  POST_CERTIFICATION_CONFIRM,
} from "constants/ActionTypes";

const INIT_STATE = {
  request_list: [],
  certification_list: [],
  seller_id: "",
  buyer_id: "",
};

const Reservation = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_RESERVATION: {
      return {};
    }
    case GET_RESERVATION_REQUEST_LIST: {
      return {
        ...state,
        request_list: action.payload,
      };
    }
    case GET_CERTIFICATION_LIST: {
      return {
        ...state,
        certification_list: action.payload.data,
        seller_id: action.payload.sellerId,
        buyer_id: action.payload.buyerId,
      };
    }
    case POST_CERTIFICATION_IMAGE: {
      state.certification_list.splice(
        action.payload.idx,
        1,
        action.payload.data
      );
      return {
        ...state,
        certification_list: [...state.certification_list],
        seller_id: action.payload.sellerId,
        buyer_id: action.payload.buyerId,
      };
    }
    case POST_CERTIFICATION_CONFIRM: {
      state.certification_list.splice(
        action.payload.idx,
        1,
        action.payload.data
      );
      return {
        ...state,
        certification_list: [...state.certification_list],
        seller_id: action.payload.sellerId,
        buyer_id: action.payload.buyerId,
      };
    }
    default:
      return state;
  }
};
export default Reservation;
