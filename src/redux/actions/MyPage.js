import {
  DELETE_PRODUCT,
  GET_MY_PAGE_BUY_LIST,
  GET_MY_PAGE_LIKE_LIST,
  GET_MY_PAGE_MY_INFO,
  GET_MY_PAGE_PRODUCT_LIST,
} from "constants/ActionTypes";

export const getMyPageMyInfo = (my_info) => {
  return (dispatch) => {
    dispatch({
      type: GET_MY_PAGE_MY_INFO,
      payload: my_info,
    });
  };
};

export const getMyPageLikeList = (like_list) => {
  return (dispatch) => {
    dispatch({
      type: GET_MY_PAGE_LIKE_LIST,
      payload: like_list,
    });
  };
};
export const getMyPageProductList = (product_list) => {
  return (dispatch) => {
    dispatch({
      type: GET_MY_PAGE_PRODUCT_LIST,
      payload: product_list,
    });
  };
};

export const getMyPageBuyList = (buy_list) => {
  return (dispatch) => {
    dispatch({
      type: GET_MY_PAGE_BUY_LIST,
      payload: buy_list,
    });
  };
};

export const deleteProduct = (boardId) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: boardId,
    });
  };
};

export const editMyInfo = () => {
  return () => {};
};
