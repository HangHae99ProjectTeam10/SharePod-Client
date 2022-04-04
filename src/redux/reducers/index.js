import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Auth from "./Auth";
import Product from "./Product";
import MyPage from "./MyPage";
import Reservation from "./Reservation";
import Notice from "./Notice";

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: Auth,
    product: Product,
    myPage: MyPage,
    reservation: Reservation,
    notice: Notice,
  });

export default reducers;
