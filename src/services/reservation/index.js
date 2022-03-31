import http from "api/http";
import {
  addReservation,
  getReservationRequestList,
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
        .catch((err) => console.log("거래요청 실패: ", err.response.data));
    };
  },
  postReservationConfirm: (data, boardId, actionType) => {
    return function (dispatch, getState, history) {
      console.log(data, boardId, actionType);
      http
        .post(`/reservation/response/${boardId}`, data)
        .then((res) => {
          if (actionType === "confirm") {
            alert("거래요청을 수락했습니다.");
          } else {
            alert("거래요청을 거절했습니다.");
          }
          history.push("/reservation/confirm");
        })
        .catch((err) => console.log("거래확인 실패: ", err.response));
    };
  },
};

export default ReservationService;
