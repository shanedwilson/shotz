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
//     let selectedmovieId = movieId;
//     return new Promise ((resolve, reject) => {
//         $.get('../db/movie.json')
//             .done(data => {
//                 const matchedMovieLocations = data.movie.forEach(movie => {
//                     if (selectedMovieId = movie.id) {
//                     let movieLocations = movie.locations;
//                     console.log(movieLocations);
//                     }
//                 })
//                 resolve(matchedMovieLocations);
//             })
//             .fail((error) => {
//                 reject('error loadMovieLocations', error);
//     })
// })
// }

export default {loadMovies,}