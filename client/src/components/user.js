import React, { Component } from 'react';

export default class User extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{this.props.name}
        <span class="caret"></span></button>
        <ul class="dropdown-menu">
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
    )
  }
}