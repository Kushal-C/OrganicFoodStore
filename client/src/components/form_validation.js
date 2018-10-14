import React, { Component } from 'react';

export default class FormValidation extends Component{
  constructor(props) {
    super(props);
  }

  state = {
    field_is_valid: true
  }

  isValidField() {
    if(this.props.value.length < 1) {
      return true;
    }
    else {
      this.state.field_is_valid = this.isValidLength() && this.hasRequiredCharacters();
    }
  }

  isValidLength() {
    if(typeof this.props.min_input_length === "undefined") {
      return true;
    }
    else {
      return this.props.value.length >= this.props.min_input_length;
    }
  }

  hasRequiredCharacters() {
    if(!Array.isArray(this.props.required_characters)) {
      return true;
    }
    else {
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
    this.isValidField();
    if(this.state.field_is_valid) {
      return(
        <div class="form-group">
          <input value={this.props.value} onChange={this.props.onChange} type={this.props.type} name={this.props.name} required/>
          <d-input id="f2_Email" class="mb-2 mr-sm-2 mb-sm-0" v-model="form.email" placeholder="email@example.com" required />
        </div>
      )
    }

    else {
      return(
        <div class="form-group">
        <input value={this.props.value} onChange={this.props.onChange} type={this.props.type} name={this.props.name} required/>
        <d-input id="f2_Email" class="mb-2 mr-sm-2 mb-sm-0" v-model="form.email" placeholder="email@example.com" required />
        <d-form-invalid-feedback>{this.props.error_msg}</d-form-invalid-feedback>
        </div>
      )
    }
  }
}