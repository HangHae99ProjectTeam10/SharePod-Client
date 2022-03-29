import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_ONE_PRODUCT_DETAIL,
  GET_PRODUCT_LIST,
  GET_SEARCH_LIST,
  SET_FAVORITE_ACTION,
  SET_FAVORITE_ACTION_IN_DETAIL,
  GET_REELS_LIST,
  GET_REELS_LIST_MORE,
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
export const setFavoriteActionInDetail = (boardId) => {
  return (dispatch) => {
    dispatch({
      type: SET_FAVORITE_ACTION_IN_DETAIL,
      payload: boardId,
    });
  };
};
export const getReelsList = (videoData, selectedReelsNumber) => {
  if (selectedReelsNumber === 1) {
    return (dispatch) => {
      dispatch({
        type: GET_REELS_LIST,
        payload: videoData,
      });
    };
  } else {
    return (dispatch) => {
      dispatch({
        type: GET_REELS_LIST_MORE,
        payload: videoData,
      });
    };
  }
};
