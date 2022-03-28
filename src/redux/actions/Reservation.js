import { ContrastOutlined } from "@mui/icons-material";
import {
  ADD_RESERVATION,
  GET_RESERVATION_REQUEST_LIST,
  GET_CERTIFICATION_LIST,
  POST_CERTIFICATION_IMAGE,
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

export const postCertificationImg = (data, imgUrl, buyerId, sellerId, idx) => {
  console.log(data);
  return (dispatch) => {
    dispatch({
      type: POST_CERTIFICATION_IMAGE,
      payload: {
        data: {
          authImgId: data.authImgId,
          check: data.check,
          authImgUrl: imgUrl,
        },
        buyerId: buyerId,
        sellerId: sellerId,
        idx: idx,
      },
    });
  };
};
