import { GET_BOARD } from "../../constants/ActionTypes";

const INIT_STATE = {
  list: [],
};

const Board = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_BOARD: {
      return {
        boardList: action.payload,
      };
    }

    default:
      return state;
  }
};
export default Board;
