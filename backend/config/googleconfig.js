const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyAsbJmghb9NrphRYCTsdqP7NxwwlTVSiIM',
    Promise: Promise
  });

const storeGeoLocs = ["402 N El Camino Real, San Mateo, CA 94401", "1984 Los Padres Blvd Santa Clara, CA 95050"];

module.exports = {googleMapsClient, storeGeoLocs};