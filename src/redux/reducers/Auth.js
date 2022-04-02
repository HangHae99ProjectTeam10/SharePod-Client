import { EDIT_MY_PROFILE, UPDATE_AUTH_USER } from "../../constants/ActionTypes";

const INIT_STATE = {
  authUser: null,
  loadUser: false,
};

const Auth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_AUTH_USER: {
      return {
        ...state,
        authUser: action.payload,
        loadUser: true,
      };
    }
    case EDIT_MY_PROFILE: {
      return {
        authUser: { ...state.authUser, userImg: action.payload },
      };
    }

    default:
      return state;
  }
};
export default Auth;
