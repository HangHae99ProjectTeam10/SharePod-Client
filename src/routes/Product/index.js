import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import PageLoader from "../../components/common/PageLoader";

const Product = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, "");

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route
          path={``}
          exact
          component={lazy(() => import(`./ProductDetail`))}
        />
      </Switch>
    </Suspense>
  );
};

export default Product;
