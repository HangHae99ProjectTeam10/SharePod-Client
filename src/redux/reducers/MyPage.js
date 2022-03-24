import { DELETE_PRODUCT, GET_MY_PAGE } from "constants/ActionTypes";

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
    case DELETE_PRODUCT: {
      const myBoardList = state.myPageData?.userMyBoard.filter(
        (p) => p.boardId !== action.payload
      );

      return {
        myPageData: { ...state.myPageData, userMyBoard: myBoardList },
      };
    }
    default:
      return state;
  }
};

export default MyPage;
