import React, { Component } from "react";

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.sendLoginCredentials = this.sendLoginCredentials.bind(this);
  }

  onEmailChange(event){
    this.setState({email: event.target.value});
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value});
  }

  sendLoginCredentials(){
    this.props.login({email: this.state.email, password: this.state.password});
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h1 className="header-primary">OFS DELIVERY</h1>
          <div className="card">
            <h4 className="card-title header-primary">LOGIN</h4>
            <div className="card-body">
              <label>User Name:</label>
              <input onChange={this.onEmailChange} type="text" name="name" />
              <br />
              <label>Password:</label>
              <input onChange={this.onPasswordChange}type="text" name="name" />
              <br />
              <button className="btn btn-primary" onClick={this.sendLoginCredentials}>LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
