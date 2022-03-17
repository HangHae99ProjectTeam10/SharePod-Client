import React from "react";
import { Route, Switch } from "react-router";
import Register from "./Auth/Register";
import Main from "./Main";
import Header from "../components/Header";
import MyPage from "./MyPage";
import Product from "./Product";

const Routes = () => {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/signup" component={Register} exact />
        <Route path="/mypage" component={MyPage} />
        <Route path="/board" component={Product} exact />
      </Switch>
    </>
  );
};

export default Routes;
