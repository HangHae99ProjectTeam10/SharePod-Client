import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
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
      </Switch>
    </Suspense>
  );
};

export default Auth;
