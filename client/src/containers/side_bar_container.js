import React, { Component } from 'react'
import Sidebar from '../components/side_bar'

export default class SidebarContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Sidebar></Sidebar>
    );
  }
}