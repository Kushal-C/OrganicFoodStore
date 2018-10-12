import React, { Component } from 'react';

export default class User extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div class="dropdown">
      <span class="badge badge-primary">{this.props.name}</span>
        <ul class="dropdown-menu">
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
    )
  }
}