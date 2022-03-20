import { ADD_PRODUCT, GET_PRODUCT_LIST } from "constants/ActionTypes";

const INIT_STATE = {
  product_list: [],
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
        product_list: action.payload,
      };
    }

    default:
      return state;
  }
};
export default Product;
