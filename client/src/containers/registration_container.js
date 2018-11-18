import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import RegistrationPage from "../components/sign_in/registration_page";
import { register } from "../actions/index";

class RegistrationContainer extends Component {
  constructor(props) {
    super(props);
    if (props.location.state != null) {
      this.state = {
        firstName: props.location.state.firstName,
        lastName: props.location.state.lastName,
        email: props.location.state.email,
        phoneNumber: props.location.state.phoneNumber
      };
    } else {
      this.state = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
      };
    }
  }
  render() {
    return (
      <RegistrationPage
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        phoneNumber={this.state.phoneNumber}
        register={this.props.register}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    registrationState: state.register
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ register: register }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationContainer);
