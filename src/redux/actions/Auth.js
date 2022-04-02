import { EDIT_MY_PROFILE, UPDATE_AUTH_USER } from "../../constants/ActionTypes";

export const setAuthUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_AUTH_USER,
      payload: user,
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
