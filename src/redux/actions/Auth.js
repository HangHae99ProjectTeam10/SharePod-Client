import {
  EDIT_MY_PROFILE,
  SET_AUTH_REGISTER_DATE,
  UPDATE_AUTH_USER,
} from "../../constants/ActionTypes";

export const setAuthUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_AUTH_USER,
      payload: user,
    });
  };
};
export const setAuthRegisterDate = (date) => {
  return (dispatch) => {
    dispatch({
      type: SET_AUTH_REGISTER_DATE,
      payload: date,
    });
  };
};

export const editMyProfile = (profile) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_MY_PROFILE,
      payload: profile,
    });
  };
};
