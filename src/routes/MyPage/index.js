import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import PageLoader from "../../components/common/PageLoader";
import MyPageMain from "./MyPageMain";

const MyPage = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, "");

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <MyPageMain>
          <Route
            path={`${requestedUrl}/myInfo`}
            exact
            component={lazy(() => import(`./MyUserInfo`))}
          />
          <Route
            path={`${requestedUrl}/like-list`}
            exact
            component={lazy(() => import(`./LikeList`))}
          />
          <Route
            path={`${requestedUrl}/product-list`}
            exact
            component={lazy(() => import(`./MyProduct`))}
          />
          <Route
            path={`${requestedUrl}/borrow-list`}
            exact
            component={lazy(() => import(`./RentalList`))}
          />
          <Route
            path={`${requestedUrl}/chat-list`}
            exact
            component={lazy(() => import(`./ChatList`))}
          />
          <Route
            path={`${requestedUrl}/withdraw`}
            exact
            component={lazy(() => import(`./Withdrawal`))}
          />
        </MyPageMain>
      </Switch>
    </Suspense>
  );
};

export default MyPage;
