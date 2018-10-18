import React, { Component } from "react";

export default class FormValidation extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fieldIsValid: true,
      className: "form-control"
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.isValidField();
    this.props.onChange(e);
  }

  isValidField() {
    if (this.props.value.length < 1) {
      return true;
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
          value={this.state.value}
          onChange={this.onChange}
          type={this.props.type}
          name={this.props.name}
          required
        />
      </div>
    );
  }
}
