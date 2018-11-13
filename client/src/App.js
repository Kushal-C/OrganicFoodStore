import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise";
import reducers from "./reducers/index";
import SignInContainer from "./containers/sign_in_container";
import DashboardContainer from "./containers/dashboard_container";
import CartContainer from "./containers/cart_container";
import RegistrationContainer from "./containers/registration_container";
import PastOrderContainer from "./containers/past_orders_container";
import UserProfileContainer from "./containers/user_profile_container";
import CheckoutContainer from './containers/checkout_container';

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
            <Route path="/checkout/view" component={CheckoutContainer} />
            <Route path="/dashboard/:category" component={DashboardContainer} />
            {/* <Route path="/cart" component={DashboardContainer} /> */}
            <Route path="/pastorders" component={PastOrderContainer} />
            <Route path="/user" component={UserProfileContainer} />
            <Route exact path="/" component={SignInContainer} />
            <Route path="/cart" render={()=><CartContainer items={
              [
                {name : "Broccoli",
                description : "Flower of Broccoli",
                number : 3,
                cost : 2,
                weight : 1,
                weight_unit : "pound"},
                {name : "Mango",
                description : "A whole mango",
                number : 2,
                cost : 2,
                weight : 2,
                weight_unit : "pounds"}
              ]}/>}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
