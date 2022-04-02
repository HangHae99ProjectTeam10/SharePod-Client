import {
  GET_NOTICE_COUNT,
  GET_NOTICE_LIST,
  UPDATE_NOTICE_LIST,
} from "constants/ActionTypes";

const INIT_STATE = {
  notice_count: 0,
  notice_list: [],
};

const Notice = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_NOTICE_COUNT: {
      return {
        notice_count: action.payload.noticeCnt,
        notice_list: state.notice_list,
      };
    }
    case GET_NOTICE_LIST: {
      return {
        notice_count: state.notice_count,
        notice_list: action.payload,
      };
    }
    default:
      return state;
  }
};

export default Notice;
