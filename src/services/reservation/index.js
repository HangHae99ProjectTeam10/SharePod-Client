import http from "api/http";
import { addReservation } from "redux/actions/Reservation";

const ReservationService = {
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
        .catch((err) => console.log("거래요청 실패: ", err.response));
    };
  },
};

export default ReservationService;
