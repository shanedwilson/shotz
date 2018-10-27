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

// const locationsForMovies = (movies) => {
//     let matchedLocationArray = [];
//     return new Promise((resolve, reject) => {
//         $.get('../db/locations.json')
//         .done((data) => {
//             movies.forEach((movie) => {
//                 data.locations.forEach((location) => {
//                     movie.locations.forEach((movieLocations) => {
//                     if (location.id === movieLocations) {
//                         matchedLocationArray.push(location.id);
//                     }
//                     console.log(matchedLocationArray);
//                     })
//                 })
//             })
//             console.log(matchedLocationArray);
//             resolve(matchedLocationArray);
//         })
//         .fail((error) => {
//             reject('error loadLocationsOnMovie', error);
//         })
//     })
// }

const locationsForMovies = (movies) => {
    return new Promise((resolve, reject) => {
        $.get('../db/locations.json')
            .done((data) => {
             movies.forEach((movie) => {
                    const locationsWithMovies = $(data.locations).map(location => {
                        console.log(location);
                        const matchingMovies = $(movie.locations).filter(movie => movie.locations === location.id)
                        location.movies = matchingMovies
                        return location
                    })
                    resolve(locationsWithMovies)
            })
            .fail((error) => {
                reject('error locationsForMovies', error);
            })
        })
    })
}

export default {loadLocations, locationsForMovies}