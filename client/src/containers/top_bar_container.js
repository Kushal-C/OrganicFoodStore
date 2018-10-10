import React, { Component } from 'react';
import Topbar from '../components/top_bar';

export default class TopbarContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <Topbar company_name = {this.props.company_name}></Topbar>
    );
  }
}