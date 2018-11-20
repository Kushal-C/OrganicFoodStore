import React, { Component } from "react";

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

  render() {

    let categoryString = this.props.match.params.category;
    categoryString = categoryString[0].toUpperCase() + categoryString.substring(1, categoryString.length);

    let items = this.props.item_props.map(function (item, index) {
      return (
        <ItemCardContainer
          key={index}
          productID={item.productId}
          productName={item.productName}
          description={item.description}
          imageLink={item.imageLink}
          cost={item.cost}
          weight={item.weight}
          weight_unit={item.weightUnit}
        />
      );
    });

    let componentToRender = <div></div>;

    if (this.props.match.params.category === "cart") {
      componentToRender = <CartContainer />;

    }
    else if (this.props.match.params.category === "pastorders") {
      componentToRender = <PastOrdersContainer />;
    }
    else if (this.props.match.params.category === "checkout") {
      componentToRender = <CheckoutContainer />;
    }
    else {
      componentToRender = items;
    }


    return (

      <div style={{minWidth:'1200px'}}>
        <div className="row">
          <SidebarContainer match={this.props.match}/>
          <div className="row col-md-9" style={{padding:'0px', margin:'0px'}}>
            <TopBar/>
              <div className="catitem col-md-12"> {categoryString}</div>
              <div className=" row col-md-12" style={{marginLeft:'10px', marginTop:'10px'}}>
                {componentToRender}
              </div>
          </div>
        </div>
      </div>
    );
  }
}
