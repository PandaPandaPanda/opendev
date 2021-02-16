import React, { Fragment } from "react";
import Logs from "./components/logs/Logs";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <div className="container">
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
