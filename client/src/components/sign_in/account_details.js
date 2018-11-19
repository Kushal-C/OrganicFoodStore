import React, { Component } from "react";
import Input from "../form_validation";

export default class AccountDetails extends Component {
  render() {
    return (
      <div>

      <div className="row">

          <div className="col-md-6">
            <label htmlFor="firstName" className="col-form-label">
              First Name
            </label>
            <Input
              name="firstName"
              onChange={this.props.onChange}
              value={this.props.firstName}
              id="firstName"
              type="text"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="lastName" className="col-form-label">
              Last Name
            </label>
            <Input
              name="lastName"
              onChange={this.props.onChange}
              value={this.props.lastName}
              id="lastName"
              type="text"
            />
          </div>

      </div>

      <div className="row">
        <div className="col-md-6">
              <label htmlFor="email" className="col-form-label">
                Email
              </label>
              <Input
                name="email"
                onChange={this.props.onChange}
                value={this.props.email}
                type="text"
                id="email"
                required_characters={["@", "."]}
                error_msg="Invalid email address"
              />
        </div>
        <div className="col-md-6">
              <label htmlFor="phoneNumber" className="col-form-label">
                Phone Number
              </label>
              <Input
                name="phoneNumber"
                onChange={this.props.onChange}
                value={this.props.phoneNumber}
                type="number"
                id="Phone Number"
                error_msg="Invalid Phone Number"
                min_input_length={10}
              />
        </div>
      </div>

        <label htmlFor="password" className="col-form-label">
          Password
        </label>
        <Input
          value={this.props.password}
          onChange={this.props.onChange}
          type="password"
          name="password"
          id="password"
          min_input_length={8}
          error_msg="Invalid password"
        />
        <label htmlFor="confirmPassword" className="col-form-label">
          Confirm Password
        </label>
        <Input
          value={this.props.confirmPassword}
          onChange={this.props.onChange}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          min_input_length={8}
          error_msg="Passwords don't match"
        />
      </div>
    );
  }
}
