// Load Movies
const loadMovies = () => {
    return new Promise((resolve, reject) => {
        $.get('../db/movie.json')
            .done(data => {
                resolve(data.movie);
            })
            .fail(error => {
                reject(error);
            })    
    });    
}

// const loadMovieLocations = (movieId) => {
//     let selectedMovieLocations
//     return new Promise ((resolve, reject) => {
//         $.get('../db/movie.json')
//             .done(data => {
//                 data.movie.forEach(movie => {
//                     if (movieId === movie.id) {
//                         selectedMovieLocations = movie.locations
//                     }
//                 })
//                 resolve(selectedMovieLocations);
//             })
//             .fail((error) => {
//                 reject('error loadMovieLocations', error);
//     })
// })
// }

export default {loadMovies, }