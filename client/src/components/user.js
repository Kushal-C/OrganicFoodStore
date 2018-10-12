import React, { Component } from 'react';

export default class User extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div class="dropdown">
        <span class="badge badge-primary">{this.props.name}</span>
      </div>
    )
  }
}