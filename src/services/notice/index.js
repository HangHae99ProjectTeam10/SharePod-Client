import http from "api/http";
import { getNoticeCount } from "redux/actions/Notice";

const NoticeService = {
  getNoticeCount: () => {
    return function (dispatch, getState) {
      const userId = getState().auth.authUser?.userId;
      http
        .get(`/notice/count/${userId}`)
        .then((res) => dispatch(getNoticeCount(res.data)))
        .catch((err) => console.log("알람 갯수 조회 실패 :", err.response));
    };
  },
};

export default NoticeService;
