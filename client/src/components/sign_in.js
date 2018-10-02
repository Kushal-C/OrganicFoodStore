import React, { Component } from "react";
import axios from "axios";
import { getItems } from "../actions/index";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email : "",
      password : ""
    }
  }

  componentWillMount() {
    getItems();
  }

  handleEmailChange = event => this.state.email = event.target.value;

  handlePasswordChange = event => this.state.password = event.target.value;

  handleClick = event => {
    axios.post('/api/login', this.state)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
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
              <input type="text" name="email" onChange={this.handleEmailChange}/>
              <br />
              <label>Password:</label>
              <input type="text" name="password" onChange={this.handlePasswordChange}/>
              <br />
              <button className="btn btn-primary" onClick={this.handleClick}>LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
