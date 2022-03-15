import { UPDATE_AUTH_USER } from "../../constants/ActionTypes";

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

    default:
      return state;
  }
};
export default Auth;
