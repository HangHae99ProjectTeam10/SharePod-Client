import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import PageLoader from "../../components/common/PageLoader";

const Reservation = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, "");

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route
          path={`${requestedUrl}/request/:id`}
          component={lazy(() => import(`./ReservationRequest`))}
        />
        <Route
          path={`${requestedUrl}/confirm`}
          component={lazy(() => import(`./ReservationConfirm`))}
        />
        <Route
          path={`${requestedUrl}/product-quality-certification`}
          component={lazy(() => import(`./ProductQualityCertification`))}
        />
      </Switch>
    </Suspense>
  );
};

export default Reservation;
