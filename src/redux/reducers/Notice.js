import { GET_NOTICE_COUNT } from "constants/ActionTypes";

const INIT_STATE = {
  notice_count: 0,
};

const Notice = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_NOTICE_COUNT: {
      return {
        notice_count: action.payload.noticeCnt,
      };
    }
    default:
      return state;
  }
};

export default Notice;
