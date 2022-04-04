import {
  ADD_MY_PAGE_CHAT_LIST,
  ADD_MY_PAGE_CHAT_START_NUM,
  DELETE_PRODUCT,
  EDIT_MY_PROFILE,
  GET_MY_PAGE_BUY_LIST,
  GET_MY_PAGE_CHAT_LIST,
  GET_MY_PAGE_CHAT_ROOM_CONTENTS,
  GET_MY_PAGE_CHAT_ROOM_CONTENTS_MORE,
  GET_MY_PAGE_CHAT_ROOM_USER,
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

export const getMyPageBuyList = (data) => {
  return (dispatch) => {
    dispatch({
      type: GET_MY_PAGE_BUY_LIST,
      payload: data,
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

export const getMyPageChatList = (chat_list) => {
  return (dispatch) => {
    dispatch({
      type: GET_MY_PAGE_CHAT_LIST,
      payload: chat_list,
    });
  };
};

export const getMyPageChatRoomContents = (chat_contents) => {
  return (dispatch) => {
    dispatch({
      type: GET_MY_PAGE_CHAT_ROOM_CONTENTS,
      payload: chat_contents,
    });
  };
};
export const getMyPageChatRoomContentsMore = (chat_contents) => {
  return (dispatch) => {
    dispatch({
      type: GET_MY_PAGE_CHAT_ROOM_CONTENTS_MORE,
      payload: chat_contents,
    });
  };
};
export const getMyPageChatRoomUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: GET_MY_PAGE_CHAT_ROOM_USER,
      payload: user,
    });
  };
};

export const addChatList = (chat) => {
  return (dispatch) => {
    dispatch({
      type: ADD_MY_PAGE_CHAT_LIST,
      payload: chat,
    });
  };
};

export const addChatStartNum = (count) => {
  return (dispatch) => {
    dispatch({
      type: ADD_MY_PAGE_CHAT_START_NUM,
      payload: count,
    });
  };
};
