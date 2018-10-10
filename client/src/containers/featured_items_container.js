import React, { Component } from 'react'
import FeaturedItem from '../components/featured_items'

export default class FeaturedItemsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <FeaturedItem items = {this.props.items}></FeaturedItem>
    );
  }
}