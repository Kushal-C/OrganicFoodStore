import React, { Component } from "react";

/*
Input Field Component, modified to work with Shards.js
Takes in the following props from its parent components
W/ exampe

value={this.state.loginPassword}
onChange={this.onLoginPasswordChange}
type="password"
name="password"
min_input_length={8}
error_msg="Invalid password"
required_characters={["@", "."]}
*/
export default class FormValidation extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fieldIsValid: true,
      className: "form-control"
    };
    this.onChange = this.onChange.bind(this);
    this.isValidField = this.isValidField.bind(this);
  }

  onChange(e) {
    this.isValidField();
    this.props.onChange(e);
  }

  isValidField() {
    if (this.props.value.length < 1) {
      this.setState({fieldIsValid: false})
    } else {
      let req = this.isValidLength() && this.hasRequiredCharacters();
      if(req){
        this.setState({className:"form-control is-valid"})
      }
      else {
        this.setState({ className: "form-control is-invalid" })
      }
      this.setState({ fieldIsValid: req });
    }
  }

  isValidLength() {
    if (typeof this.props.min_input_length === "undefined") {
      return true;
    } else {
      return this.props.value.length >= this.props.min_input_length;
    }
  }

  hasRequiredCharacters() {
    if (!Array.isArray(this.props.required_characters)) {
      return true;
    } else {
      let containsChars = true;
      for (let i = 0; i < this.props.required_characters.length; i++) {
        if (!this.props.value.includes(this.props.required_characters[i])) {
          containsChars = false;
        }
      }
      return containsChars;
    }
  }

  render() {
    return (
      <div className={this.state.className}>
        <input
          value={this.props.value}
          onChange={this.onChange}
          type={this.props.type}
          name={this.props.name}
          required
        />
      </div>
    );
  }
}
