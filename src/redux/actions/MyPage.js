import { GET_MY_PAGE } from "constants/ActionTypes";

export const getMyPage = (my_page_data) => {
  return (dispatch) => {
    dispatch({
      type: GET_MY_PAGE,
      payload: my_page_data,
    });
  };
};

export const editMyInfo = () => {
  return () => {};
};
