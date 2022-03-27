import http from "api/http";
import {
  editMyInfo,
  deleteProduct,
  getMyPageMyInfo,
  getMyPageLikeList,
} from "redux/actions/MyPage";

const MyPageService = {
  getMyInfo: () => {
    return function (dispatch, getState, history) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";
      http
        .get(`/user/${userId}`)
        .then((res) => {
          dispatch(getMyPageMyInfo(res.data.userInfo));
        })
        .catch((err) => console.log("마이페이지 불러오기:", err));
    };
  },
  getMyLikeList: () => {
    return function (dispatch, getState, history) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";
      http
        .get(`/user/like/${userId}`)
        .then((res) => {
          dispatch(getMyPageLikeList(res.data.userLikedBoard));
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
          window.alert("회원 정보를 수정했습니다.");
        })
        .catch((err) => console.log("회원정보 수정:", err));
    };
  },
  deleteProduct: (boardId) => {
    return function (dispatch, getState, history) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";

      http
        .delete(`/board/${boardId}`, {
          data: {
            userId: userId,
          },
        })
        .then((res) => {
          alert("게시글이 삭제되었습니다.");
          dispatch(deleteProduct(boardId));
        })
        .catch((err) => console.log("게시글 삭제 실패: ", err.response));
    };
  },

  withdrawalMyId: (data) => {
    return function (dispatch, getState, history) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";
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
