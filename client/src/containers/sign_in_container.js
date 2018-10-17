import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import SignIn from "../components/sign_in";
import { login, register } from "../actions/index";

class SignInContainer extends Component {
  render() {
    return <SignIn login={login} register={register} />;
  }
}

function mapStateToProps(state) {
  return {
    login_state: state.login
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login: login }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInContainer);
