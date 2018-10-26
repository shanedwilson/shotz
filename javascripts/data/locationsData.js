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

const locationsForMovies = (movies) => {
    let matchedLocationArray = [];
    return new Promise((resolve, reject) => {
        $.get('../db/locations.json')
        .done((data) => {
            movies.forEach((movie) => {
                data.locations.forEach((location) => {
                    movie.locations.forEach((movieLocations) => {
                    if (location.id === movieLocations) {
                        matchedLocationArray.push(location.id);
                    }
                    console.log(matchedLocationArray);
                    })
                })
            })
            console.log(matchedLocationArray);
            resolve(matchedLocationArray);
        })
        .fail((error) => {
            reject('error loadLocationsOnMovie', error);
        })
    })
}

export default {loadLocations, locationsForMovies}