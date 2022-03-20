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
        const file = new File();
        userFormData.append("userImgFile", file);
      }
      const userInfo = getState((state) => state);
      const userId = userInfo.auth.authUser.userId;
      console.log(userFormData, data, userImg);
      http
        .patch(`/user/${userId}`, userFormData)
        .then((res) => {
          console.log(res);
          dispatch(editMyInfo(res));
        })
        .catch((err) => console.log("회원정보 수정:", err));
    };
  },
};

export default MyPageService;
