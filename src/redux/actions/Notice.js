import { GET_NOTICE_COUNT } from "constants/ActionTypes";

export const getNoticeCount = (notice_count) => {
  return (dispatch) => {
    dispatch({
      type: GET_NOTICE_COUNT,
      payload: notice_count,
    });
  };
};
