import locationsComponent from '../components/locationsComponent.js'

// Load Locations
const loadLocations = () => {
$.get('../db/locations.json')
    .done(data => {
        locationsComponent.writeLocations(data.locations);
    })
    .fail(error => {
        console.log(error);
    })
};

export default {loadLocations}