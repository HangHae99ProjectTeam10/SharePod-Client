import {
  ADD_MY_PAGE_CHAT_LIST,
  DELETE_PRODUCT,
  GET_MY_PAGE_BUY_LIST,
  GET_MY_PAGE_CHAT_LIST,
  GET_MY_PAGE_CHAT_ROOM_CONTENTS,
  GET_MY_PAGE_CHAT_ROOM_USER,
  GET_MY_PAGE_LIKE_LIST,
  GET_MY_PAGE_MY_INFO,
  GET_MY_PAGE_PRODUCT_LIST,
} from "constants/ActionTypes";

const INIT_STATE = {
  myPageData: [],
  myInfo: null,
  likeList: [],
  productList: [],
  buyList: [],
  sellList: [],
  chatList: [],
  chatRoomContents: {},
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
    case GET_MY_PAGE_PRODUCT_LIST: {
      return {
        productList: action.payload,
      };
    }
    case GET_MY_PAGE_BUY_LIST: {
      return {
        buyList: action.payload.rentBuyerList,
        sellList: action.payload.rentSellerList,
      };
    }
    case GET_MY_PAGE_CHAT_LIST: {
      return {
        chatList: action.payload,
      };
    }
    case GET_MY_PAGE_CHAT_ROOM_CONTENTS: {
      return {
        chatRoomContents: action.payload,
      };
    }
    case GET_MY_PAGE_CHAT_ROOM_USER: {
      return {
        chatRoomUser: action.payload,
      };
    }
    case ADD_MY_PAGE_CHAT_LIST: {
      return {
        chatRoomContents: {
          ...state.chatRoomContents,
          chatMessageDataList: [
            ...state.chatRoomContents.chatMessageDataList,
            action.payload,
          ],
        },
      };
    }
    case DELETE_PRODUCT: {
      const myBoardList = state.productList?.filter(
        (p) => p.boardId !== action.payload
      );

      return {
        productList: myBoardList,
      };
    }
    default:
      return state;
  }
};

export default MyPage;
