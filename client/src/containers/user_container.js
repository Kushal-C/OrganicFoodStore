import React, { Component } from 'react';
import User from '../components/user';

export default class UserContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <User name = {this.props.name}></User>
    );
  }
}