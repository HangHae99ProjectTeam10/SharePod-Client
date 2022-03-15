import React from "react";
import { Route, Switch } from "react-router";
import Register from "./Auth/Register";
import Main from "./Main";
import Header from "../components/Header";
import MyPage from "./MyPage";

const Routes = () => {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/signup" component={Register} exact />
        <Route path="/mypage" component={MyPage} />
      </Switch>
    </>
  );
};

export default Routes;
