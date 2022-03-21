import http from "api/http";
import { getMyPage, editMyInfo } from "redux/actions/MyPage";

const MyPageService = {
  getMyPageData: () => {
    return function (dispatch, getState, history) {
      const userInfo = getState((state) => state);
      const userId = userInfo.auth.authUser.userId;
      http
        .get(`user/${userId}`)
        .then((res) => {
          dispatch(getMyPage(res.data.userInfo));
        })
        .catch((err) => console.log("마이페이지 불러오기:", err));
    };
  },

  editMyInfoData: (data, userImg) => {
    return function (dispatch, getState, history) {
      const userFormData = new FormData();
      userFormData.append(
        "userModifyRequestDTO",
        new Blob([JSON.stringify(data)], { type: "application/json" })
      );
      if (userImg) {
        userFormData.append("userImgFile", userImg);
      } else {
        userFormData.append(
          "userImgFile",
          new Blob([], { type: "multipart/form-data" })
        );
      }
      const userInfo = getState((state) => state);
      const userId = userInfo.auth.authUser.userId;
      http
        .patch(`/user/${userId}`, userFormData)
        .then((res) => {
          console.log(res);
          dispatch(editMyInfo(res));
        })
        .catch((err) => console.log("회원정보 수정:", err));
    };
  },

  withdrawalMyId: (data) => {
    return function (dispatch, getState, history) {
      const userInfo = getState((state) => state);
      const userId = userInfo.auth.authUser.userId;
      console.log(data);

      http
        .delete(`/user/${userId}`, {
          data: data,
        })
        .then((res) => {
          localStorage.removeItem("persist:root");
          localStorage.removeItem("sharepod.token");
          localStorage.removeItem("sharepod.refresh.token");
          history.replace("/");
          console.log(res);
          alert(res.data.msg);
          window.location.reload();
        })
        .catch((err) => console.log("회원정보 수정:", err));
    };
  },
};

export default MyPageService;
