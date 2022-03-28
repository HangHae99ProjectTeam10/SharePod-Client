import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import PageLoader from "../../components/common/PageLoader";

const Product = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, "");

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route
          path={`${requestedUrl}/product-detail/:id`}
          exact
          component={lazy(() => import(`./ProductDetail`))}
        />
        <Route
          path={`${requestedUrl}/reservation`}
          exact
          component={lazy(() => import(`./Reservation`))}
        />
        <Route
          path={`${requestedUrl}/upload-product`}
          exact
          component={lazy(() => import(`./UploadProduct`))}
        />
        <Route
          path={`${requestedUrl}/edit-product/:id`}
          exact
          component={lazy(() => import(`./EditProduct`))}
        />
        <Route
          path={`${requestedUrl}/product-search`}
          component={lazy(() => import(`./ProductSearchResult`))}
        />
      </Switch>
    </Suspense>
  );
};

export default Product;
