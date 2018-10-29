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
    return new Promise((resolve, reject) => {
        $.get('../db/locations.json')
            .done((data) => {
                let moviesForLocations = [];
             movies.forEach((movie) => {
                    const locationsWithMovies = data.locations.map(location => {
                        const matchingMovies = movie.locations.filter(specLocation => specLocation.includes(location.id))
                        moviesForLocations.push(matchingMovies)
                        // return specLocation
                    })
            })
            console.log(moviesForLocations)
            .fail((error) => {
                reject('error locationsForMovies', error);
            })
        })
    })
}

export default {loadLocations, locationsForMovies}