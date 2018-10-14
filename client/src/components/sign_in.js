import React, { Component } from "react";
import FormValidationContainer from "../containers/form_validation_container";

export default class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginEmail: "",
      loginPassword: "",
      firstName: "",
      lastName: "",
      registrationEmail: "",
      registrationPassword: "",
      address: "",
      creditCardNum: "",
      securityNumber: "",
      phoneNumber: ""
    }

    this.onLoginEmailChange = this.onLoginEmailChange.bind(this);
    this.onLoginPasswordChange = this.onLoginPasswordChange.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onRegistrationEmailChange = this.onRegistrationEmailChange.bind(this);
    this.onRegistrationPasswordChange = this.onRegistrationPasswordChange.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onCreditCardChange = this.onCreditCardChange.bind(this);
    this.onSecurityNumberChange = this.onSecurityNumberChange.bind(this);
    this.onPhoneNumberChange = this. onPhoneNumberChange.bind(this);
    this.sendLoginCredentials = this.sendLoginCredentials.bind(this);
    this.sendRegistrationInformation = this.sendRegistrationInformation.bind(this);
  }

  onLoginEmailChange(event){
    this.setState({loginEmail: event.target.value});
  }

  onLoginPasswordChange(event) {
    this.setState({loginPassword: event.target.value});
  }

  onFirstNameChange(event){
    this.setState({firstName: event.target.value});
  }

  onLastNameChange(event){
    this.setState({lastName: event.target.value});
  }

  onRegistrationEmailChange(event){
    this.setState({registrationEmail: event.target.value});
  }

  onRegistrationPasswordChange(event){
    this.setState({registrationPassword: event.target.value});
  }

  onAddressChange(event){
    this.setState({address: event.target.value});
  }

  onCreditCardChange(event){
    this.setState({creditCardNum: event.target.value});
  }

  onSecurityNumberChange(event){
    this.setState({securityNumber: event.target.value});
  }

  onPhoneNumberChange(event) {
    this.setState({phoneNumber: event.target.value});
  }

  sendLoginCredentials(){
    this.props.login(
      {
        loginEmail: this.state.loginEmail,
        loginPassword: this.state.loginPassword
      }
    );
  }

  sendRegistrationInformation() {
    this.props.register(
      {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        registrationEmail: this.state.registrationEmail,
        registrationPassword: this.state.registrationPassword,
        creditCardNum: this.state.creditCardNum,
        securityNumber: this.state.securityNumber,
        phoneNumber: this.state.phoneNumber
      }
    );
  }

  render() {
    return (
      <div>
        <div className="row">
          <h1 className="header-primary">OFS DELIVERY</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <h4 className="card-title header-primary">LOGIN</h4>
              <div className="card-body">
                <label>Email:</label>
                <br />
                <FormValidationContainer value={this.state.loginEmail} onChange={this.onLoginEmailChange} type="text" name="name" required_characters = {["@", "."]} error_msg = "Invalid email address"/>
                <br />
                <label>Password:</label>
                <br />
                <FormValidationContainer value={this.state.loginPassword} onChange={this.onLoginPasswordChange}type="password" name="password" min_input_length = {8} error_msg = "Invalid password"/>
                <br /><br />
                <button className="btn btn-primary" onClick={this.sendLoginCredentials}>LOGIN</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className = "card">
              <h4 className="card-title header-primary">REGISTER</h4>
                <div className="card-body">
                  <label>First Name:</label>
                  <br />
                  <FormValidationContainer value={this.state.firstName} onChange={this.onFirstNameChange} type="text" name="first name" />
                  <br />
                  <label>Last Name:</label>
                  <br />
                  <FormValidationContainer value={this.state.lastName} onChange={this.onLastNameChange} type="text" name="last name" />
                  <br />
                  <label>Email:</label>
                  <br />
                  <FormValidationContainer value={this.state.registrationEmail} onChange={this.onRegistrationEmailChange} type="email" name="email" required_characters = {["@", "."]} error_msg = "Invalid email address" />
                  <br />
                  <label>Password:</label>
                  <br />
                  <FormValidationContainer value={this.state.registrationPassword} onChange={this.onRegistrationPasswordChange} type="password" name="registration password" min_input_length = {8} error_msg = "Invalid password" />
                  <br />
                  <label>Credit Card Number:</label>
                  <br />
                  <FormValidationContainer value={this.state.creditCardNum} onChange={this.onCreditCardChange} type="text" name="credit card number" />
                  <br />
                  <label>Security Number:</label>
                  <br />
                  <FormValidationContainer value={this.state.securityNumber} onChange={this.onSecurityNumberChange} type="text" name="security number" />
                  <br />
                  <label>Phone Number:</label>
                  <br />
                  <FormValidationContainer value={this.state.phoneNumber} onChange={this.onPhoneNumberChange} type="tel" name="phone number" />
                  <br /><br />
                  <button className="btn btn-primary" onClick={this.sendRegistrationInformation}>REGISTER</button>
                </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
