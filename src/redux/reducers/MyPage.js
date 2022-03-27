import {
  DELETE_PRODUCT,
  GET_MY_PAGE_LIKE_LIST,
  GET_MY_PAGE_MY_INFO,
} from "constants/ActionTypes";

const INIT_STATE = {
  myPageData: [],
  myInfo: null,
  likeList: [],
};

const MyPage = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_MY_PAGE_MY_INFO: {
      return {
        myInfo: action.payload,
      };
    }
    case GET_MY_PAGE_LIKE_LIST: {
      return {
        likeList: action.payload,
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
