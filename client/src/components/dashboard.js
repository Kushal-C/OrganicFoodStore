import React, { Component } from "react";
import TopbarContainer from '../containers/top_bar_container'
import UserContainer from '../containers/user_container';
import SidebarContainer from '../containers/side_bar_container';
import FeaturedItemsContainer from '../containers/featured_items_container';
import ItemCardContainer from '../containers/item_card_container';

export default class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName : ""
    }
  }

  getFeaturedItems() {
    let items = [
      <ItemCardContainer
        name = "Broccoli"
        description = "Flower of Broccoli"
        cost = {2}
        weight = {1}
        weight_unit = "pound"
      >
      </ItemCardContainer>,
      <ItemCardContainer
      name = "Mango"
      description = "A single mango"
      cost = {3}
      weight = {1}
      weight_unit = "pound"
    >
    </ItemCardContainer>
    ];
    return (items);
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="col-md-6 text-left">
            <TopbarContainer company_name = "OFS Delivery"></TopbarContainer>
          </div>
          <div className="col-md-6 text-right">
            <UserContainer name = "John Smith"></UserContainer>
          </div>
        </div>
        <div className="row">
          <SidebarContainer val = "Side bar goes here"></SidebarContainer>
          <div className="col-md-6 text-left">
            <FeaturedItemsContainer items = {this.getFeaturedItems()}></FeaturedItemsContainer>
          </div>
        </div>
      </div>
    )
  }
}