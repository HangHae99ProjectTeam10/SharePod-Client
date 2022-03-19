import { GET_BOARD, ADD_BOARD } from "../../constants/ActionTypes";

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
    case ADD_BOARD: {
      return {
        board: action.payload,
      };
    }

    default:
      return state;
  }
};
export default Board;
