import React, { Component } from "react";
import {Link} from 'react-router-dom';

import SidebarContainer from "../../containers/side_bar_container";
import ItemCardContainer from "../../containers/item_card_container";
import TopBar from "../../containers/top_bar_container";
import CartContainer from "../../containers/cart_container";
import PastOrdersContainer from "../../containers/past_orders_container";
import CheckoutContainer from "../../containers/checkout_container";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  getCategory() {
    let categoryName = this.props.match.params.category;
    categoryName = categoryName[0].toUpperCase() + categoryName.substring(1, categoryName.length);
    return categoryName;
  }

  displayComponent() {
    if(this.props.match.params.category == "cart") {
      return (
        <CartContainer />
      )
    }
    else if(this.props.match.params.category == "pastorders") {
      return(
        <PastOrdersContainer />
      );
    }
    else if(this.props.match.params.category == "checkout") {
      return(<CheckoutContainer />)
    }
    else {
      return(
        this.props.item_props.map(function(item, index){
          console.log(item);
          return (
          <ItemCardContainer
            name = {item.productName}
            description = {item.description}
            imageLink = {item.imageLink}
            cost = {item.cost}
            weight = {item.weight}
            weight_unit = {item.weight_unit}
            key={index}/>);
        })
      )
    }

  }

  render() {

    let categoryString = this.props.match.params.category;
    categoryString = categoryString[0].toUpperCase() + categoryString.substring(1, categoryString.length);
console.log("CATEGORY: " + this.props.match.params.category);
    return (

      <div style={{minWidth:'1200px'}}>
        <div className="row">
          <SidebarContainer match={this.props.match}/>
          <div className="row col-md-9" style={{padding:'0px', margin:'0px'}}>
            <TopBar/>


              <div className="catitem col-md-12"> {this.getCategory()}</div>
                {this.displayComponent()}

          </div>
        </div>
      </div>
    );
  }
}
