import {
  ADD_PRODUCT,
  GET_ONE_PRODUCT_DETAIL,
  GET_PRODUCT_LIST,
  GET_SEARCH_LIST,
  SET_FAVORITE_ACTION,
} from "constants/ActionTypes";

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

export const getOneProductDetail = (product) => {
  return (dispatch) => {
    dispatch({
      type: GET_ONE_PRODUCT_DETAIL,
      payload: product,
    });
  };
};
export const getSearchList = (product_list) => {
  return (dispatch) => {
    dispatch({
      type: GET_SEARCH_LIST,
      payload: product_list,
    });
  };
};
export const setFavoriteAction = (boardId) => {
  return (dispatch) => {
    dispatch({
      type: SET_FAVORITE_ACTION,
      payload: boardId,
    });
  };
};
