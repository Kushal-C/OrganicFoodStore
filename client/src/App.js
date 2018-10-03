import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise";
import reducers from "./reducers/index";
import SignInContainer from "./containers/sign_in_container";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, logger)(
  createStore
);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
          <div className="container-fluid">
            <Route path="/" component={SignInContainer} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
