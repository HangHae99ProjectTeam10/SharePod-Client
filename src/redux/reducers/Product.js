import {
  ADD_PRODUCT,
  GET_ONE_PRODUCT_DETAIL,
  GET_PRODUCT_LIST,
} from "constants/ActionTypes";

const INIT_STATE = {
  product_list: [],
  product_detail: {},
};

const Product = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST: {
      return {
        product_list: action.payload,
      };
    }
    case ADD_PRODUCT: {
      return {
        product_list: [action.payload, ...state.product_list],
      };
    }
    case GET_ONE_PRODUCT_DETAIL: {
      return {
        product_detail: action.payload,
      };
    }

    default:
      return state;
  }
};
export default Product;
