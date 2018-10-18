import React, { Component } from 'react'
import FormValidation from '../form_validation';

class LoginCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginEmail: "",
            loginPassword: ""
        }

        this.onLoginEmailChange = this.onLoginEmailChange.bind(this);
        this.onLoginPasswordChange = this.onLoginPasswordChange.bind(this);
        this.sendLoginCredentials = this.sendLoginCredentials.bind(this);
        
    }

    sendLoginCredentials() {
        this.props.login({
            loginEmail: this.state.loginEmail,
            loginPassword: this.state.loginPassword
        });
    }

    onLoginEmailChange(event) {
        this.setState({ loginEmail: event.target.value });
    }

    onLoginPasswordChange(event) {
        this.setState({ loginPassword: event.target.value });
    }


    render(){
        return(
            <div className="col-md-6">
                <div className="card">
                    <h4 className="card-title header-primary">LOGIN</h4>
                    <div className="card-body">
                        <label>Email:</label>
                        <br />
                        <FormValidation
                            value={this.state.loginEmail}
                            onChange={this.onLoginEmailChange}
                            type="text"
                            name="name"
                            required_characters={["@", "."]}
                            error_msg="Invalid email address"
                        />
                        <label>Password:</label>
                        <FormValidation
                            value={this.state.loginPassword}
                            onChange={this.onLoginPasswordChange}
                            type="password"
                            name="password"
                            min_input_length={8}
                            error_msg="Invalid password"
                        />
                        <br />
                        <button
                            className="btn btn-primary"
                            onClick={this.sendLoginCredentials}
                        >
                            LOGIN
                </button>
                    </div>
                </div>
            </div>
        );
    }

}

export default LoginCard;