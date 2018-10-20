import React, { Component } from 'react';
import { Link } from "react-router-dom";

import FormValidation from '../form_validation';

class RegistrationCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            registrationEmail: "",
            phoneNumber: ""
        };

        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onRegistrationEmailChange = this.onRegistrationEmailChange.bind(this);
        this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
        this.sendRegistrationInformation = this.sendRegistrationInformation.bind(
            this
        );
    }

    onFirstNameChange(event) {
        this.setState({ firstName: event.target.value });
    }

    onLastNameChange(event) {
        this.setState({ lastName: event.target.value });
    }

    onRegistrationEmailChange(event) {
        this.setState({ registrationEmail: event.target.value });
    }

    onPhoneNumberChange(event) {
        this.setState({ phoneNumber: event.target.value });
    }

    sendRegistrationInformation() {
        this.props.register({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            registrationEmail: this.state.registrationEmail,
            phoneNumber: this.state.phoneNumber
        });
    }

    render() {
        return <div className="col-md-6">
            <div className="card">
              <h4 className="card-title header-primary">REGISTER</h4>
              <div className="card-body">
                <label>First Name:</label>
                <br />
                <FormValidation value={this.state.firstName} onChange={this.onFirstNameChange} type="text" name="first name" />
                <label>Last Name:</label>
                <FormValidation value={this.state.lastName} onChange={this.onLastNameChange} type="text" name="last name" />
                <label>Email:</label>
                <FormValidation value={this.state.registrationEmail} onChange={this.onRegistrationEmailChange} type="email" name="email" required_characters={["@", "."]} error_msg="Invalid email address" />
                <label>Phone Number:</label>
                <FormValidation value={this.state.phoneNumber} onChange={this.onPhoneNumberChange} type="tel" name="phone number" />
                <button className="btn btn-primary" onClick={this.sendRegistrationInformation}>
                  <Link className="text-white" to="/register/profile">
                    REGISTER
                  </Link>
                </button>
              </div>
            </div>
          </div>;
    }
}

export default RegistrationCard;
