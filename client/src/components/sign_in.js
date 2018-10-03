import React, { Component } from "react";
import axios from "axios";
import { getItems, sendUserLogin } from "../actions";

export default class SignIn extends Component {
  state = {
      email : "",
      password : ""
    }

  componentDidMount() {
    getItems();
  }

  handleEmailChange = event => this.setState({email : event.target.value});

  handlePasswordChange = event => this.setState({password : event.target.value});

  handleClick = async (event) => {
    let response;
    const {email, password} = this.state;
    try {
      response = await sendUserLogin('/api/login', {email, password});
    }
    catch(error) {
      console.log(error);
    }
    console.log("Response: " + response);
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
