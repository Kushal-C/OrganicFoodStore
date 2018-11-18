import React, { Component } from "react";
import {Link} from 'react-router-dom';

import AccountDetails from "./account_details";
import PaymentInformation from "./payment_information";
/*
Props passed in include first name, last name, email and phone number
*/
class RegistrationPage extends Component {
  constructor(props) {
    super(props);
    if (this.props.firstName != null) {
      this.state = {
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        email: this.props.email,
        phoneNumber: this.props.phoneNumber,
        password: "",
        confirmPassword: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        creditCardNumber: "",
        expirationDate: "",
        cvc: ""
      };
    } else {
      this.state = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        creditCardNumber: "",
        expirationDate: "",
        cvc: ""
      };
    }
    this.onChange = this.onChange.bind(this);
    this.register = this.register.bind(this);
  }
  register(){
    this.props.register(this.state);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return <div className="row" style={{ margin: "20px" }}>
        <div className="col-md-12 card">
          <h3 style={{ margin: "20px" }}>Account Details</h3>
          <br />
          <AccountDetails firstName={this.state.firstName} lastName={this.state.lastName} email={this.state.email} phoneNumber={this.state.phoneNumber} password={this.state.password} confirmPassword={this.state.confirmPassword} onChange={this.onChange} />
          <br />
          <h3>Payment Information</h3>
          <br />
          <PaymentInformation address={this.state.address} city={this.state.city} state={this.state.state} zipCode={this.state.zipCode} creditCardNumber={this.state.creditCardNumber} expirationDate={this.state.expirationDate} cvc={this.state.cvc} onChange={this.onChange} />

          <Link to="/" className="text-white btn btn-primary" onClick={this.register} style={{ marginBottom: "20px", marginTop: "20px" }}>
            Register
          </Link>
        </div>
      </div>;
  }
}

export default RegistrationPage;
