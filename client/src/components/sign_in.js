import React, { Component } from "react";
import { getItems } from "../actions/index";

class SignIn extends Component {
  componentWillMount() {
    getItems();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h1 className="header-primary">OFS DELIVERY</h1>
          <div className="card">
            <h4 className="card-title header-primary">LOGIN</h4>
            <div className="card-body">
              <label>User Name:</label>
              <input type="text" name="name" />
              <br />
              <label>Password:</label>
              <input type="text" name="name" />
              <br />
              <button className="btn btn-primary">LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
