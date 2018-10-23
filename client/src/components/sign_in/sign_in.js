import React, { Component } from "react";
import LoginCard from './login_card';
import RegistrationCard from './registration_card';

export default class SignIn extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <h1 className="header-primary">OFS DELIVERY</h1>
        </div>
        <div className="row">
          <LoginCard loginState={this.props.loginState} login={this.props.login}/>
          <RegistrationCard registerState={this.props.registerState} register={this.props.register} />
        </div>
      </div>
    );
  }
}
