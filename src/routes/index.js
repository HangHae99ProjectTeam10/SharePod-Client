import React from "react";
import { Route, Switch } from "react-router";
import Main from "./Main";
import Header from "../components/common/Header";
import MyPage from "./MyPage";
import Product from "./Product";
import Auth from "./Auth";

const Routes = () => {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/auth" component={Auth} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/product" component={Product} />
      </Switch>
    </>
  );
};

export default Routes;
