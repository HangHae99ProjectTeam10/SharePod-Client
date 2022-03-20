import { ADD_PRODUCT, GET_PRODUCT_LIST } from "constants/ActionTypes";

export const getProductList = (product_list) => {
  return (dispatch) => {
    dispatch({
      type: GET_PRODUCT_LIST,
      payload: product_list,
    });
  };
};

export const addOneProduct = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: product,
    });
  };
};
