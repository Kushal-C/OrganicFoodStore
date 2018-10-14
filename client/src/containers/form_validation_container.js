import React, { Component } from 'react'
import FormValidation from '../components/form_validation'

export default class FormValidationContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <FormValidation
        input value={this.props.value}
        onChange={this.props.onChange}
        type={this.props.type}
        name={this.props.name}
        required_characters={this.props.required_characters}
        min_input_length={this.props.min_input_length}
        error_msg={this.props.error_msg}
        >
      </FormValidation>
    );
  }
}