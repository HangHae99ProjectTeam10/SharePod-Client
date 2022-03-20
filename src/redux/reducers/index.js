import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Auth from "./Auth";
import Product from "./Product";

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: Auth,
    product: Product,
  });

export default reducers;
