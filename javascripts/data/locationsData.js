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

// Load Specific Locations For Movies

const loadLocationsForMovie = (selectedMovieCard) => {
    return new Promise ((resolve, reject) => {
        $.get('../db/movie.json')
            .done((data) => {
                data.movie.forEach(movie => {
                if (selectedMovieCard === movie.id) {
                    let movieLocations = movie.locations;
                    console.log(movieLocations);
                    resolve(movieLocations);
                }
            })
        })
    })
}

export default {loadLocations, loadLocationsForMovie}