import React, { Component } from "react";

export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldIsValid: true
    };
  }

  isValidField() {
    if (this.props.value.length < 1) {
      return true;
    } else {
      let req = this.isValidLength() && this.hasRequiredCharacters();
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
    if (this.state.fieldIsValid) {
      return (
        <div class="form-control is-valid">
          <input
            value={this.props.value}
            onChange={this.props.onChange}
            type={this.props.type}
            name={this.props.name}
            required
          />
          <d-input
            id="f2_Email"
            class="mb-2 mr-sm-2 mb-sm-0"
            v-model="form.email"
            placeholder="email@example.com"
            required
          />
        </div>
      );
    } else {
      return (
        <div class="form-control is-invalid">
          <input
            value={this.props.value}
            onChange={this.props.onChange}
            type={this.props.type}
            name={this.props.name}
            required
          />
          <d-input
            id="f2_Email"
            class="mb-2 mr-sm-2 mb-sm-0"
            v-model="form.email"
            placeholder="email@example.com"
            required
          />
          <d-form-invalid-feedback>
            {this.props.error_msg}
          </d-form-invalid-feedback>
        </div>
      );
    }
  }
}
