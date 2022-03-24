import { DELETE_PRODUCT, GET_MY_PAGE } from "constants/ActionTypes";

export const getMyPage = (my_page_data) => {
  return (dispatch) => {
    dispatch({
      type: GET_MY_PAGE,
      payload: my_page_data,
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
