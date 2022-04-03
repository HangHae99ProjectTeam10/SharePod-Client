import {
  EDIT_MY_PROFILE,
  MYPAGE_TOGGLE_BTN,
  SET_AUTH_REGISTER_DATE,
  UPDATE_AUTH_USER,
} from "../../constants/ActionTypes";

const INIT_STATE = {
  authUser: null,
  loadUser: false,
  registerDay: 0,
  toggleBtn: "0",
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
    case SET_AUTH_REGISTER_DATE: {
      return {
        ...state,
        registerDay: action.payload,
      };
    }
    case EDIT_MY_PROFILE: {
      return {
        ...state,
        authUser: { ...state.authUser, userImg: action.payload },
      };
    }
    case MYPAGE_TOGGLE_BTN: {
      return {
        ...state,
        toggleBtn: action.payload,
      };
    }

    default:
      return state;
  }
};
export default Auth;
