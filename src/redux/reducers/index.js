import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Auth from "./Auth";
import Board from "./Board";

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: Auth,
    board: Board,
  });

export default reducers;
