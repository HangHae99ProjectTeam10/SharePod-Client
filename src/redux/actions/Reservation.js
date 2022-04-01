import {
  ADD_RESERVATION,
  GET_RESERVATION_REQUEST_LIST,
  GET_CERTIFICATION_LIST,
  POST_CERTIFICATION_IMAGE,
  POST_CERTIFICATION_CONFIRM,
} from "constants/ActionTypes";

export const getReservationRequestList = (reservation_list) => {
  return (dispatch) => {
    dispatch({
      type: GET_RESERVATION_REQUEST_LIST,
      payload: reservation_list,
    });
  };
};

export const addReservation = (reservation) => {
  return (dispatch) => {
    dispatch({
      type: ADD_RESERVATION,
      payload: reservation,
    });
  };
};

export const getProductQualityCertification = (data) => {
  return (dispatch) => {
    dispatch({
      type: GET_CERTIFICATION_LIST,
      payload: data,
    });
  };
};

export const postCertificationImg = (data, buyerId, sellerId, idx) => {
  return (dispatch) => {
    dispatch({
      type: POST_CERTIFICATION_IMAGE,
      payload: {
        data: {
          authImgId: data.authImgId,
          authImgCheck: false,
          authImgUrl: data.authImgUrl,
        },
        buyerId,
        sellerId,
        idx,
      },
    });
  };
};

export const postCertificationConfirm = (
  data,
  imgUrl,
  buyerId,
  sellerId,
  idx
) => {
  console.log(data);
  return (dispatch) => {
    dispatch({
      type: POST_CERTIFICATION_CONFIRM,
      payload: {
        data: {
          authImgId: data.authImgId,
          check: data.check,
          authImgUrl: imgUrl,
        },
        buyerId,
        sellerId,
        idx,
      },
    });
  };
};
