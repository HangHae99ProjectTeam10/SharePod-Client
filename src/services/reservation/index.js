import http from "api/http";
import {
  addReservation,
  getReservationRequestList,
  getProductQualityCertification,
  postCertificationImg,
  postCertificationConfirm,
} from "redux/actions/Reservation";

const ReservationService = {
  getReservationRequestList: () => {
    return function (dispatch, getState, history) {
      const userId = getState().auth.authUser?.userId;
      http
        .get(`/reservation/${userId}`)
        .then((res) => {
          console.log(res.data);
          dispatch(getReservationRequestList(res.data.reservationList));
        })
        .catch((err) => console.log("거래요청 목록 불러오기 :", err.response));
    };
  },

  addReservation: (data, boardId) => {
    return function (dispatch, getState, history) {
      http
        .post(`/reservation/request/${boardId}`, data, {
          Headers: {
            "content-type": "application/json",
          },
        })
        .then((res) => {
          alert("거래요청이 완료되었습니다.");
          dispatch(addReservation(res.data.boardData));
          history.replace(`/product/product-detail/${boardId}`);
        })
        .catch((err) => window.alert(err.response.data.msg));
    };
  },
  postReservationConfirm: (data, boardId) => {
    return function (dispatch, getState, history) {
      console.log(data, boardId);
      http
        .post(`/reservation/response/${boardId}`, data)
        .then((res) => {
          console.log(res);
          history.push("/reservation/confirm");
        })
        .catch((err) => console.log("거래확인 실패: ", err.response));
    };
  },

  getProductQualityCertification: (authId) => {
    return function (dispatch, getState) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";
      http
        .get(`/auth/img/${authId}`)
        .then((res) => {
          dispatch(getProductQualityCertification(res.data));
        })
        .catch((err) => console.log("품질인증 목록 조회 실패: ", err.response));
    };
  },

  postProductQualityCertificationImage: (imgFile, authImgId, idx) => {
    return function (dispatch, getState) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";
      const formData = new FormData();
      formData.append("authFile", imgFile);

      const buyerId = getState().reservation.buyer_id;
      const sellerId = getState().reservation.seller_id;

      http
        .post(`/auth/img/${userId}/${authImgId}`, formData)
        .then((res) => {
          console.log(res);
          alert("품질 인증 이미지를 등록했습니다.");
          dispatch(postCertificationImg(res.data, buyerId, sellerId, idx));
        })
        .catch((err) => console.log("품질인증 등록 실패: ", err.response));
    };
  },

  postProductCertificationConfirm: (boolean, authImgId, imgUrl, idx) => {
    return function (dispatch, getState) {
      const userId = getState().auth.authUser?.userId
        ? getState().auth.authUser?.userId
        : "";
      const buyerId = getState().reservation.buyer_id;
      const sellerId = getState().reservation.seller_id;
      const data = {
        authImgId: authImgId,
        sellerId: userId,
        check: boolean,
      };

      http
        .post(`/auth/img/bool`, data)
        .then((res) => {
          if (res.data.check === true) {
            alert("품질인증을 확인했습니다.");
          } else {
            alert("품질인증을 거절했습니다.");
          }
          dispatch(
            postCertificationConfirm(res.data, imgUrl, buyerId, sellerId, idx)
          );
        })
        .catch((err) => console.log("제품 상태 확인실패:", err));
    };
  },
};

export default ReservationService;
