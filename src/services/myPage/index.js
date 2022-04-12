import http from "api/http";
import { editMyProfile, setAuthRegisterDate } from "redux/actions/Auth";
import {
  deleteProduct,
  getMyPageMyInfo,
  getMyPageLikeList,
  getMyPageProductList,
  getMyPageChatList,
  getMyPageChatRoomContents,
  getMyPageBuyList,
  getMyPageChatRoomContentsMore,
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
        .catch((err) => console.log("마이페이지 불러오기:", err.response));
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
  getMyProductList: () => {
    return function (dispatch, getState, history) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";
      http
        .get(`/user/board/${userId}`)
        .then((res) => {
          dispatch(setAuthRegisterDate(res.data.withDay));
          dispatch(getMyPageProductList(res.data.userMyBoard));
        })
        .catch((err) => console.log("마이페이지 불러오기:", err));
    };
  },
  getMyBuyList: () => {
    return function (dispatch, getState, history) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";
      http
        .get(`/user/order/${userId}`)
        .then((res) => {
          dispatch(getMyPageBuyList(res.data));
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
          dispatch(editMyProfile(res.data.userModifiedImg));
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
  makeChatRoom: (boardId) => {
    return function (dispatch, getState, history) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";

      http
        .post(`/chat/room`, {
          boardId: boardId,
          buyerId: userId,
        })
        .then((res) => {
          if (res.data.chatRoomId) {
            history.push(`/mypage/chat/room/${res.data.chatRoomId}`);
          } else {
            history.push(`/mypage/chat/room/${res.data.chatId}`);
            dispatch(getMyPageChatList(res.data.chatRoomList));
          }
        })
        .catch((err) => {
          window.alert(err.response.data.msg);
        });
    };
  },
  getChatList: () => {
    return function (dispatch, getState, history) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";

      http
        .get(`/chat/room/${userId}`)
        .then((res) => {
          dispatch(getMyPageChatList(res.data.chatRoomList));
        })
        .catch((err) => console.log("채팅룸 불러오기 실패: ", err.response));
    };
  },
  getOneChatRoomContents: (chatroomId, number = 0) => {
    return function (dispatch, getState, history) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";

      const lastDatetime = getState().myPage.chatRoomContents?.lastDatetime
        ? getState().myPage.chatRoomContents?.lastDatetime
        : "";

      http
        .get(`/chat/roomslist/${userId}/${chatroomId}?time=${lastDatetime}`)
        .then((res) => {
          dispatch(getMyPageChatRoomContents(res.data));
        })
        .catch((err) => console.log("채팅 내역 불러오기 실패: ", err.response));
    };
  },
  getOneChatRoomContentsMore: (chatroomId, number) => {
    return function (dispatch, getState, history) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";
      const lastDatetime = getState().myPage.chatRoomContents?.lastDatetime
        ? getState().myPage.chatRoomContents?.lastDatetime
        : "";

      http
        .get(`/chat/roomslist/${userId}/${chatroomId}?time=${lastDatetime}`)
        .then((res) => {
          console.log(res);
          if (res.data.resultCount === 0) {
            return;
          }
          dispatch(getMyPageChatRoomContentsMore(res.data));
        })
        .catch((err) => console.log("채팅 내역 불러오기 실패: ", err.response));
    };
  },

  withdrawalMyId: (data) => {
    return function (dispatch, getState, history) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";

      http
        .delete(`/user/${userId}`, {
          username: data.username,
          password: data.password,
        })
        .then((res) => {
          localStorage.removeItem("persist:root");
          localStorage.removeItem("sharepod.token");
          localStorage.removeItem("sharepod.refresh.token");
          history.replace("/");
          alert(res.data.msg);
          window.location.reload();
        })
        .catch((err) => console.log("회원정보 수정:", err));
    };
  },
};

export default MyPageService;
