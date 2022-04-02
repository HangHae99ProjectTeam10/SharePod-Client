import { GET_NOTICE_COUNT, GET_NOTICE_LIST } from "constants/ActionTypes";

export const getNoticeCount = (notice_count) => {
  return (dispatch) => {
    dispatch({
      type: GET_NOTICE_COUNT,
      payload: notice_count,
    });
  };
};

export const getNoticeList = (noticeList) => {
  return (dispatch) => {
    dispatch({
      type: GET_NOTICE_LIST,
      payload: noticeList,
    });
  };
};
