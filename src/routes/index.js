import React from "react";
import { Route, Switch, Redirect } from "react-router";
import Main from "./Main";
import Header from "../components/common/Header";
import MyPage from "./MyPage";
import Product from "./Product";
import Auth from "./Auth";
import { useSelector } from "react-redux";

const RestrictedRoute = ({ component: Component, ...rest }) => {
  const { authUser } = useSelector(({ auth }) => auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth/signin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
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
