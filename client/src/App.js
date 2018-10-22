import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise";
import reducers from "./reducers/index";
import SignInContainer from "./containers/sign_in_container";
import DashboardContainer from "./containers/dashboard_container";
import RegistrationContainer from "./containers/registration_container";
import PastOrderContainer from "./containers/past_orders_container";
import GoogleMap from './components/checkout/map';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, logger)(
  createStore
);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
          <div className="container-fluid">
            <Route path="/register/profile" component={RegistrationContainer} />
            <Route path="/checkout/view" component={GoogleMap} />
            <Route path="/dashboard/:category" component={DashboardContainer} />
            <Route path="/cart" component={DashboardContainer} />
            <Route path="/pastorders" component={PastOrderContainer} />
            <Route exact path="/" component={SignInContainer} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
