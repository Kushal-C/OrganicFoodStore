import React, { Component } from "react";
import { compose, withProps, lifecycle } from "recompose";
import { DirectionsRenderer, Geocoder } from "react-google-maps";
import { GOOGLE_MAPS_API_KEY } from "../../actions/api_constants";

const { withScriptjs, withGoogleMap, GoogleMap } = require("react-google-maps");

const api_key = "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_MAPS_API_KEY + "&v=3.exp&libraries=geometry,drawing,places";

// async function codeAddress(address) {
//   let geocoder = new window.google.maps.Geocoder();
//   let res = await promise;
//   let promise = await geocoder.geocode( { 'address' : address }, function( results, status ) {
//     if( status == window.google.maps.GeocoderStatus.OK ) {
//       res = new window.google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
//       return res;
//     }
//     else {
//       alert( 'Geocode was not successful for the following reason: ' + status );
//     }
//   });
//   console.log(res);
//   return res;
// }

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
          //TODO: Replace this.props.origin/destination lat/long with codeAddress()
          // origin: new window.google.maps.LatLng(37.562992, -122.325523),
          // destination: new window.google.maps.LatLng(37.338207, -121.886330),
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

<Map />;

export default class CheckoutMap extends Component {
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

  render() {
    return (
      <div className = "row">
        <div className = "col-md-8">
          <div style={{ height: '150%', width: '100%' }}>
            <Map />;
          </div>
          <div className = "card">
            <div className="row">
              <div className="col-md-6 text-left">Arrival Time: {this.props.arrival_time}</div>
              <div className="col-md-6 text-right">Order Status: {this.props.order_status}</div>
            </div>
          </div>
        </div>
        <div className = "col-md-4">
            <div className = "card">
              <p>Order Details</p>
              <div class="dropdown-divider"></div>
              {/*
              The following code is commented out as the map function will
              only work when the server sends list of ordered items.
              {
                this.props.items.map(function(item){
                  return(
                  <div className="row">
                    <div className="col-md-6 text-left">{item.name}</div>
                    <div className="col-md-6 text-right">
                      x{item.quantity}
                    </div>
                  </div>
                  )
                })
              } */}
              <div class="dropdown-divider"></div>
              <p>Total Weight: {this.props.total_weight} {this.props.weight_unit}</p>
            </div>
            <div className = "card">
              <p>Total Price</p>
              <div class="dropdown-divider"></div>
              <div className="row">
                <div class="col-md-6">
                  <div className="text-left">${this.props.price}</div>
                </div>
                <div class="col-md-6">
                  <div className="text-right">
                    Price
                  </div>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <div className="row">
                <div class="col-md-6">
                  <div className="text-left">${this.props.tax}</div>
                </div>
                <div class="col-md-6">
                  <div className="text-right">
                    Tax
                  </div>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <div className="row">
                <div class="col-md-6">
                  <div className="text-left">${this.props.total_cost}</div>
                </div>
                <div class="col-md-6">
                  <div className="text-right">
                    totals
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
