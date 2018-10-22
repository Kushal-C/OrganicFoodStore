import React, { Component } from "react";
import {Link } from "react-router-dom";

import FormValidation from "../form_validation";

class RegistrationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      registrationEmail: "",
      phoneNumber: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="card">
          <h4 className="card-title header-primary">REGISTER</h4>
          <div className="card-body">
            <label>First Name:</label>
            <br />
            <FormValidation
              value={this.state.firstName}
              onChange={this.onChange}
              type="text"
              name="firstName"
            />
            <label>Last Name:</label>
            <FormValidation
              value={this.state.lastName}
              onChange={this.onChange}
              type="text"
              name="lastName"
            />
            <label>Email:</label>
            <FormValidation
              value={this.state.registrationEmail}
              onChange={this.onChange}
              type="email"
              name="registrationEmail"
              required_characters={["@", "."]}
              error_msg="Invalid email address"
            />
            <label>Phone Number:</label>
            <FormValidation
              value={this.state.phoneNumber}
              onChange={this.onChange}
              type="tel"
              name="phoneNumber"
            />
            <button className="btn btn-primary">
              <Link
                className="text-white"
                to={{
                  pathname: "/register/profile",
                  state: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.registrationEmail,
                    phoneNumber: this.state.phoneNumber
                  }
                }}
              >
                REGISTER
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationCard;
