import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import PageLoader from "../../components/common/PageLoader";

const Main = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, "");

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route
          path={`${requestedUrl}/`}
          exact
          component={lazy(() => import(`./MainPage`))}
        />
      </Switch>
    </Suspense>
  );
};

export default Main;
