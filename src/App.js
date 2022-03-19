import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import configureStore, { history } from "./redux/store";
import { Switch } from "react-router-dom";
import Routes from "./routes";
import { PersistGate } from "redux-persist/integration/react";

export const { store, persistor } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <Routes />
          </Switch>
        </PersistGate>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
