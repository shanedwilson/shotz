import movieComponent from '../components/movieComponent.js'

// Load Movies
$.get('../db/movie.json')
    .done(data => {
        movieComponent.writeMovies(data.movie);
    })
    .fail(error => {
        console.log(error);
    })