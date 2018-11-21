import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import SignIn from "../components/sign_in/sign_in";
import { login, register } from "../actions/index";

class SignInContainer extends Component {
  constructor(props){
    super(props);
    this.isAdmin = this.isAdmin.bind(this);
  }
  isAdmin(){
    this.props.history.push('/admin');
  }
  render() {
    console.log("JSON.stringify " + JSON.stringify(this.props.registrationResponse));
    if(this.props.registrationResponse && this.props.registrationResponse.responseCode != "200") {
      alert("Failed to Register. The current email may already exist.")
    }
    return (
      <SignIn
        loginState={this.props.loginState}
        registrationState={this.props.registrationState}
        login={this.props.login}
        register={this.props.register}
        admin={this.isAdmin}
      />
    );
  }
}

function mapStateToProps(state) {
  console.log("STATE: " + JSON.stringify(state))
  return {
    loginState: state.login,
    registrationState: state.register,
    registrationResponse : state.registrationResponse
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login: login, register: register}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInContainer);
