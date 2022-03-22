import { GET_MY_PAGE } from "constants/ActionTypes";

const INIT_STATE = {
  myPageData: [],
};

const MyPage = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_MY_PAGE: {
      return {
        myPageData: action.payload,
      };
    }
    default:
      return state;
  }
};

export default MyPage;
