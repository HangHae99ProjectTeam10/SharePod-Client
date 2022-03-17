import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import PageLoader from "../../components/common/PageLoader";

const Auth = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, "");

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route
          exact
          path={`${requestedUrl}/signup`}
          component={lazy(() => import(`./Register`))}
        />
        <Route
          exact
          path={`${requestedUrl}/signin`}
          component={lazy(() => import(`./Login`))}
        />
      </Switch>
    </Suspense>
  );
};

export default Auth;
