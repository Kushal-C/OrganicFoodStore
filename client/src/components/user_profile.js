import React, { Component } from "react";
import {Link} from "react-router-dom";

import AccountDetails from "./sign_in/account_details";
import PaymentInformation from "./sign_in/payment_information";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    if(this.props.profile == null){
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
    else {
      this.state = this.props.profile[0];
    }
    
    this.onChange = this.onChange.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  componentWillMount(){
    this.setState({ confirmPassword: "" });
  }

  updateProfile(){
    if(this.state.password !== this.state.confirmPassword){
      alert("Passwords don't match");
    }
    else if (this.state.password.length === 0 || this.state.confirmPassword.length === 0){
      alert('Please properly enter your password in both fields');
    }
    if (this.state.firstName !== "" && this.state.lastName !== "" && this.state.email !== "" && this.state.phoneNumber !== "" && this.state.password !== "" && this.state.confirmPassword !== "" && this.state.address !== "" && this.state.city !== "" && this.state.state !== "" && this.state.zipCode !== "" && this.state.creditCardNumber !== "" && this.state.expirationDate !== "" && this.state.cvc !== "") {
      this.props.updateProfile(this.state);
    }
    else {
      alert("Update profile failed, make sure you fill out all fields");
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="row" style={{margin:'20px'}}>
        <div className="col-md-12 card">
          <h3>Account Details</h3>
          <br />
          <AccountDetails
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phoneNumber={this.state.phoneNumber}
            password={this.state.password}
            confirmPassword={this.state.confirmPassword}
            onChange={this.onChange}
          />
          <br />
          <h3>Payment Information</h3>
          <br />
          <PaymentInformation
            address={this.state.address}
            city={this.state.city}
            state={this.state.state}
            zipCode={this.state.zipCode}
            creditCardNumber={this.state.creditCardNumber}
            expirationDate={this.state.expirationDate}
            cvc={this.state.cvc}
            onChange={this.onChange}
          />
          <Link to="/dashboard/featured" className="text-white btn btn-primary" onClick={this.updateProfile} style={{marginBottom:'20px', marginTop:'20px'}}>
            UPDATE PROFILE
          </Link>
        </div>
      </div>
    );
  }
}

export default UserProfile;
