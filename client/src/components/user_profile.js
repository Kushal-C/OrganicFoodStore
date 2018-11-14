import React, { Component } from "react";
import {Link} from "react-router-dom";

import AccountDetails from "./sign_in/account_details";
import PaymentInformation from "./sign_in/payment_information";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.profile);
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
        zipcode: "",
        cardNumber: "",
        expiryDate: "",
        cvc: ""
      };
    }
    else {
      this.state = this.props.profile[0];
    }
    
    this.onChange = this.onChange.bind(this);
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
            zipcode={this.state.zipcode}
            cardNumber={this.state.cardNumber}
            expiryDate={this.state.expiryDate}
            cvc={this.state.cvc}
            onChange={this.onChange}
          />
          <Link to="/dashboard/featured" className="text-white btn btn-primary" style={{marginBottom:'20px', marginTop:'20px'}}>
            UPDATE PROFILE
          </Link>
        </div>
      </div>
    );
  }
}

export default UserProfile;
