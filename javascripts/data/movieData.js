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

const getMovieLocations = (selectedMovieId) => {
    return new Promise((resolve, reject) => {
        $.get('../db/movie.json')
            .done(data => {
                const selectMovieLocations = data.movie.find(movie =>{
                    return movie.id === selectedMovieId;
                }).locations;
                resolve(selectMovieLocations);
            })
            .fail(error => {
                reject(error)
            })
    })
}
export default {loadMovies, getMovieLocations}