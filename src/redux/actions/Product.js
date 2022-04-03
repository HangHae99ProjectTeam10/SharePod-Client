import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_ONE_PRODUCT_DETAIL,
  GET_PRODUCT_LIST,
  GET_SEARCH_LIST,
  GET_SEARCH_LIST_MORE,
  SET_FAVORITE_ACTION,
  SET_FAVORITE_ACTION_IN_SEARCH,
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

export const getSearchList = (data, start_num) => {
  if (start_num !== 0) {
    return (dispatch) => {
      dispatch({
        type: GET_SEARCH_LIST_MORE,
        payload: data,
      });
    };
  } else {
    console.log("HIHIHIHI");
    return (dispatch) => {
      dispatch({
        type: GET_SEARCH_LIST,
        payload: data,
      });
    };
  }
};

export const setFavoriteAction = (boardId) => {
  return (dispatch) => {
    dispatch({
      type: SET_FAVORITE_ACTION,
      payload: boardId,
    });
  };
};
export const setFavoriteActionInSearch = (boardId) => {
  return (dispatch) => {
    dispatch({
      type: SET_FAVORITE_ACTION_IN_SEARCH,
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
export const getReelsList = (videoData, count) => {
  if (count === -1) {
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
