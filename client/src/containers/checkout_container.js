import React, { Component } from "react";
/*
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
*/
import Checkout from "../components/checkout/checkout";

class CheckoutContainer extends Component {
  state = {
    payload: null,
    orderId: 1
  };

  componentWillMount() {
    let path_names = this.props.location.pathname.split('/');
    let id = path_names[path_names.length - 1];
    this.state.orderId = id;
  }

  render() {
    return (
      <Checkout
        checkoutContents={{
          origin: "S 4th St, San Jose, CA 95112",
          destination: "2293 Cabrillo Ave Santa Clara, CA 95050",
          arrival_time: "40 minutes",
          order_status: "In route",
          items: [
            { name: "Red Baron's Pizza", quantity: 1 },
            { name: "Strawberries", quantity: 2 }
          ],
          total_weight: "3",
          weight_unit: "lbs",
          price: "8.99",
          tax: "0.89",
          total_cost: "9.89"
        }}
      />
    );
  }
}
/*
function mapStateToProps(state) {
  return { checkoutContents : state.checkoutContents};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ checkoutContents : getCheckoutContents }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutContainer);
*/

export default CheckoutContainer;
