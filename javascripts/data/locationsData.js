// Load Locations
const loadLocations = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/locations.json')
            .done(data => {
                resolve(data.locations);
            })
            .fail(error => {
               reject(error);
            })
    });

}

let matchedLocationArray = [];

const locationsForMovies = (selectedMovieLocations) => {
    let matchedLocationArray = [];
    return new Promise((resolve, reject) => {
        $.get('../db/locations.json')
        .done((data) => {
            selectedMovieLocations.forEach((movieLocation) => {
                data.locations.forEach((location) => {
                    if (location.if === movieLocation) {
                        matchedLocationArray.push(location);
                    }
                })
            })
            resolve(moviesWithLocations);
        })
        .fail((error) => {
            reject('error loadLocationsOnMovie', error);
        })
    })
}

export default {loadLocations, locationsForMovies}