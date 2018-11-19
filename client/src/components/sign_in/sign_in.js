import React, { Component } from "react";
import LoginCard from './login_card';
import RegistrationCard from './registration_card';

export default class SignIn extends Component {
  
  render() {
    return (
      <div className="mr-5 ml-5">
        <div className="row ml-auto mr-auto" style={{margin: '20px'}}>
          <h1 className="header-primary">OFS DELIVERY</h1>
        </div>
        <div className="row">
          <LoginCard admin={this.props.admin} loginState={this.props.loginState} login={this.props.login} />
          <div className=" col-md-1"></div>
          <RegistrationCard registerState={this.props.registerState} register={this.props.register}/>
        </div>
      </div>
    );
  }
}
    //      