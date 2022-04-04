import http from "api/http";
import {
  getNoticeCount,
  getNoticeList,
  updateNoticeList,
} from "redux/actions/Notice";

const NoticeService = {
  getNoticeCount: () => {
    return function (dispatch, getState) {
      const userId = getState().auth.authUser?.userId;
      http
        .get(`/notice/count/${userId}`)
        .then((res) => dispatch(getNoticeCount(res.data)))
        .catch((err) => console.log("알림 갯수 조회 실패 :", err.response));
    };
  },
  getNoticeList: () => {
    return function (dispatch, getState) {
      const userId = getState().auth.authUser?.userId;
      http
        .get(`/notice/${userId}`)
        .then((res) => {
          dispatch(getNoticeList(res.data.noticeList));
        })
        .catch((err) => console.log("알림 목록 조회 실패:", err.response));
    };
  },

  deleteNotice: (noticeId) => {
    return function (dispatch) {
      http
        .delete(`/notice/${noticeId}`)
        .then((res) => {
          console.log(res.data);
          dispatch(NoticeService.getNoticeList());
          dispatch(NoticeService.getNoticeCount());
        })
        .catch((err) => console.log("알림 삭제 실패:", err.response));
    };
  },
};

export default NoticeService;
