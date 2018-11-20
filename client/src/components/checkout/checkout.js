import React, { Component } from "react";
import { compose, withProps, lifecycle } from "recompose";
import { DirectionsRenderer } from "react-google-maps";
import { GOOGLE_MAPS_API_KEY } from "../../actions/api_constants";
import CountdownTimer from './countdown_timer';

const { withScriptjs, withGoogleMap, GoogleMap } = require("react-google-maps");

const api_key =
  "https://maps.googleapis.com/maps/api/js?key=" +
  GOOGLE_MAPS_API_KEY +
  "&v=3.exp&libraries=geometry,drawing,places";

const Map = compose(
  withProps({
    googleMapURL: api_key,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();

      DirectionsService.route(
        {
          origin: this.props.origin,
          destination: this.props.destination,
          travelMode: window.google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  })
)(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new window.google.maps.LatLng(41.85073, -87.65126)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

export default class Checkout extends Component {
  state = {
    isMarkerShown: false
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  renderCheckoutItems() {
    if(this.props.checkoutContents) {
      return (
        this.props.checkoutContents.items.map(function(item) {
          return(
              <div className="row">
              <div className="col-md-6 text-left">{item.productName}</div>
              <div className="col-md-6 text-right">x{item.quantity}</div>
            </div>
          );
        })
      )
    }
    else {
      <div>
        Could not render checkout items
      </div>
    }
  }

  render() {
    return (
      <div className="row col-md-12">
        <div className="row col-md-9">
          <div style={{ height: "100%", width: "150%" }}>
            <Map
              origin={this.props.checkoutContents.origin}
              destination={this.props.checkoutContents.destination}
            />
          </div>
            <div className="col-md-6 text-left">
              <CountdownTimer orderStatus = { this.props.checkoutContents.order_status } arrivalTime = {this.props.checkoutContents.arrival_time } />
            </div>
            </div>
        <div className="col-md-3">
          <div className="card" style={{ width: "100%", marginLeft:'10px', marginBottom:'10px', padding:'20px'}}>
            <p className="head-title"> Order Details</p>
            <div>
            {this.renderCheckoutItems()}
            </div>
            <div className="dropdown-divider" />
            <p>
              Total Weight: {this.props.checkoutContents.total_weight}{" "} Pounds
              {this.props.checkoutContents.weight_unit}
            </p>
          </div>
          <div className="card" style={{ width: "100%", marginLeft:'10px', marginBottom:'10px', padding:'20px' }}>
            <p className="head-title">Total Price</p>
            <div class="dropdown-divider" />
            <div className="row">
              <div class="col-md-6">
                <div className="text-left">
                  ${this.props.checkoutContents.price}
                </div>
              </div>
              <div class="col-md-6">
                <div className="text-right">Price</div>
              </div>
            </div>
            <div class="dropdown-divider" />
            <div className="row">
              <div class="col-md-6">
                <div className="text-left">
                  ${this.props.checkoutContents.tax}
                </div>
              </div>
              <div class="col-md-6">
                <div className="text-right">Tax</div>
              </div>
            </div>
            <div class="dropdown-divider" />
            <div className="row">
              <div class="col-md-6">
                <div className="text-left">
                  ${this.props.checkoutContents.total_cost}
                </div>
              </div>
              <div class="col-md-6">
                <div className="text-right">totals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
