import movieComponent from '../components/movieComponent.js'

// Load Movies
const loadMovies = () => {
$.get('../db/movie.json')
    .done(data => {
        movieComponent.writeMovies(data.movie);
    })
    .fail(error => {
        console.log(error);
    })
};

export default {loadMovies}