import React, { Component } from 'react';

export default class Topbar extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>
          {this.props.company_name}
        </h1>
      </div>
    )
  }
}