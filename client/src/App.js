import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "./css/bootstrap.min.css";
import "./css/shards.min.css";
import "./css/App.css";

import SignIn from "./components/sign_in";

class App extends Component {
  render() {
    return (
    <div>
        <Router>
          <div className="container-fluid">
            <Route path="/" component={SignIn} />
          </div>
        </Router>
    </div>);
  }
}

export default App;
