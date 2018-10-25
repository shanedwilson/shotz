import movieData from "../data/movieData.js";
import locationsComponent from "../components/locationsComponent.js"
import locationsData from "../data/locationsData.js"

const writeMovies = arrayofMovies => {
    let domString = '';
    arrayofMovies.forEach(movie => {
    domString += `
    <div id="${movie.id}"class="movie card col-md-3 px-0 m-3" style="width: 18rem;">
    <div class="card-body">
      <div class="thumbnail mb-3">
      <img src="${movie.movieImg}" 
      alt="" width="100%">
      </div>
      <h5 class="card-title text-center">${movie.name}</h5>
      <h6 class="card-subtitle mb-2">Genre: ${movie.genre}</h6>
      <h6 class="card-subtitle mb-2">Est. Release Date: ${movie.release}</h6>
      <p class="card-text">${movie.description}</p>
    </div>
  </div>
    `
    });
    $("#movie-div").append(domString);
};

const selectedMovie = (selectedMovieId) => {
  $(".movie").each((i, movie) => {
    if (selectedMovieId !== movie.id) {
      $(movie).addClass('d-none');
    }
  })
}

const clickedMovieLocations = (movies, movieId) => {
  movies.forEach(movie => {
    if (movie.id === movieId) {
      let movieLocations = movie.locations;
      locationsComponent.hideLocations(movieLocations);
    }
  })
}

const initializeMovieView = () => {
  movieData.loadMovies()
  .then((movies) => {
    writeMovies(movies);
  })
  .catch((error) => {
    console.error(error);
  })
}

const loadMovieLocations = (movieId) => {
  movieData.loadMovies()
  .then((movies) => {
    clickedMovieLocations(movies, movieId);
  })
  .catch((error) => {
    console.error('loadmovielocations', error);
  })
}


export default {initializeMovieView, selectedMovie, loadMovieLocations}    