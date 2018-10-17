import locationsComponent from '../components/locationsComponent.js'

// Load Movies
$.get('../db/locations.json')
    .done(data => {
        locationsComponent.writeLocations(data.locations);
    })
    .fail(error => {
        console.log(error);
    })