import React, { Component } from 'react';
import ItemCard from './item_card';

export default class FeaturedItems extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      this.props.items.map((component, i) => <div key={i}>{component}</div>)
    )
  }
}