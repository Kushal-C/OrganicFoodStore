import React, { Component } from "react";

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginEmail: "",
      loginPassword: "",
      firstName: "",
      lastName: "",
      registrationEmail: "",
      phoneNumber: ""
    }

    this.onLoginEmailChange = this.onLoginEmailChange.bind(this);
    this.onLoginPasswordChange = this.onLoginPasswordChange.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onRegistrationEmailChange = this.onRegistrationEmailChange.bind(this);
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

  onPhoneNumberChange(event) {
    this.setState({phoneNumber: event.target.value});
  }

  sendLoginCredentials(){
    this.props.login({loginEmail: this.state.loginEmail, loginPassword: this.state.loginPassword});
  }

  sendRegistrationInformation() {
    this.props.register(
      {
       firstName: this.state.firstName,
       lastName: this.state.lastName,
       registrationEmail: this.state.registrationEmail,
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
                <input value={this.state.loginEmail} onChange={this.onLoginEmailChange} type="text" name="name" />
                <br />
                <label>Password:</label>
                <br />
                <input value={this.state.loginPassword} onChange={this.onLoginPasswordChange}type="text" name="name" />
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
                  <input value={this.state.firstName} onChange={this.onFirstNameChange} type="text" name="first name" />
                  <br />
                  <label>Last Name:</label>
                  <br />
                  <input value={this.state.lastName} onChange={this.onLastNameChange} type="text" name="last name" />
                  <br />
                  <label>Email:</label>
                  <br />
                  <input value={this.state.registrationEmail} onChange={this.onRegistrationEmailChange} type="email" name="loginEmail" />
                  <br />
                  <label>Phone Number:</label>
                  <br />
                  <input value={this.state.phoneNumber} onChange={this.onPhoneNumberChange} type="tel" name="phone number" />
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
export default SignIn;
