const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyAsbJmghb9NrphRYCTsdqP7NxwwlTVSiIM',
    Promise: Promise
});

const storeGeoLocs = ["2293 Cabrillo Ave Santa Clara, CA 95050", "402 N El Camino Real, San Mateo, CA 94401"]; //flipped

module.exports = {
    googleMapsClient,
    storeGeoLocs
 };