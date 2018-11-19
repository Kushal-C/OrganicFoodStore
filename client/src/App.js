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
import UserProfileContainer from "./containers/user_profile_container";
import AdminContainer from "./containers/admin_container";

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
            <Route path="/dashboard/:category" component={DashboardContainer} />
            <Route path="/user" component={UserProfileContainer} />
            <Route path="/admin" component = {AdminContainer} />
            <Route exact path="/" component={SignInContainer} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
