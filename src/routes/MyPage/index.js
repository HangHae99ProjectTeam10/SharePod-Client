import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import PageLoader from "../../components/common/PageLoader";

const MyPage = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, "");

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route
          path={`${requestedUrl}`}
          exact
          component={lazy(() => import(`./MyInfoSetting`))}
        />
        <Route
          path={`${requestedUrl}/personal-chat`}
          exact
          component={lazy(() => import(`./PersonalChat2`))}
        />
      </Switch>
    </Suspense>
  );
};

export default MyPage;
