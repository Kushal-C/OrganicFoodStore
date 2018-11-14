import React, { Component } from 'react';
import { Link } from "react-router-dom";

import FormValidation from '../form_validation';

/*
        minLength: this.props.minLength,
        specialChars: this.props.specialChars,  Should be an array 8
        isAlphanumeric: this.props.isAlphanumeric,
        value: "",
        isValid: false
*/
class LoginCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginEmail: "",
            loginPassword: ""
        }

        this.onChange = this.onChange.bind(this);
        this.sendLoginCredentials = this.sendLoginCredentials.bind(this);

    }

    sendLoginCredentials() {
        this.props.login({
            loginEmail: this.state.loginEmail,
            loginPassword: this.state.loginPassword
        });

    }

    onChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    render(){
        return(
            <div className="col-md-7">
                <div className="card" style={{height: '500px', position:'relative'}}>
                    <h4 className="card-title header-primary " style={{marginLeft: '25px', marginTop:'25px', marginBottom:'0px'}}>LOGIN</h4>
                    <div className="card-body">
                        <label>Email:</label>
                        <br />
                        <FormValidation
                            value={this.state.loginEmail}
                            onChange={this.onChange}
                            type="text"
                            name="loginEmail"
                            required_characters={["@", "."]}
                            error_msg="Invalid email address"
                        />
                        <label>Password:</label>
                        <FormValidation
                            value={this.state.loginPassword}
                            onChange={this.onChange}
                            type="password"
                            name="loginPassword"
                            min_input_length={8}
                            error_msg="Invalid password"
                        />
                        <br />
                        <button
                            className="btn btn-primary"
                            style={{position:'absolute', bottom:'25px'}}
                            onClick={this.sendLoginCredentials}
                        >
                            <Link className="text-white" to="/dashboard/featured">LOGIN</Link>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}

export default LoginCard;