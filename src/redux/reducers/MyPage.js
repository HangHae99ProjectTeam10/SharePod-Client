import {
  ADD_MY_PAGE_CHAT_LIST,
  ADD_MY_PAGE_CHAT_START_NUM,
  DELETE_PRODUCT,
  GET_MY_PAGE_BUY_LIST,
  GET_MY_PAGE_CHAT_LIST,
  GET_MY_PAGE_CHAT_ROOM_CONTENTS,
  GET_MY_PAGE_CHAT_ROOM_CONTENTS_MORE,
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
  requestList: [],
  chatList: [],
  chatRoomContents: {},
  chatStartnum: 0,
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
        requestList: action.payload.userReservationList,
      };
    }
    case GET_MY_PAGE_CHAT_LIST: {
      return {
        chatList: action.payload,
      };
    }
    case GET_MY_PAGE_CHAT_ROOM_CONTENTS: {
      const chatList = action.payload.chatMessageDataList.reverse();

      return {
        chatRoomContents: {
          ...action.payload,
          chatMessageDataList: chatList,
        },
      };
    }
    case GET_MY_PAGE_CHAT_ROOM_CONTENTS_MORE: {
      const chatList = action.payload.chatMessageDataList.reverse();

      return {
        chatRoomContents: {
          ...action.payload,
          chatMessageDataList: [
            ...chatList,
            ...state.chatRoomContents.chatMessageDataList,
          ],
        },
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
    case ADD_MY_PAGE_CHAT_START_NUM: {
      return {
        chatStartnum: action.payload,
      };
    }
    default:
      return state;
  }
};

export default MyPage;
