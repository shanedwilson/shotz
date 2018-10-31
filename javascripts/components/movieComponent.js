import movieData from "../data/movieData.js";
import locationsComponent from "../components/locationsComponent.js";
import locationsData from "../data/locationsData.js";

const writeMovies = arrayofMovies => {
  let domString = "";
  arrayofMovies.forEach(movie => {
    let locationCount = movie.locations.length;
    domString += `
    <div id="${
      movie.id
    }"class="movie card col-md-3 px-0 m-3" style="width: 18rem;">
      <div class="card-body">
        <div class="thumbnail mb-3">
        <img src="${movie.movieImg}" 
        alt="" width="100%">
        </div>
        <h5 class="card-title text-center">${movie.name}</h5>
        <h6 class="card-subtitle mb-2">Genre: ${movie.genre}</h6>
        <h6 class="card-subtitle mb-2">Est. Release Date: ${movie.release}</h6>
        <div>
          <p class="card-text">${movie.description}</p>
        </div>
      </div>  
      <div class="location-count card-footer mt-auto">
        <p class="text-center">Locations Used: ${locationCount}</p>
      </div>
    </div>
    `;
  });
  $("#movie-div").html(domString);
};

//Function to show clicked movie
const selectedMovie = selectedMovieId => {
  $(".movie").each((i, movie) => {
    if (selectedMovieId !== movie.id) {
      $(movie).hide();
      $('#All').hide();
    }
  });
  movieData
    .getMovieLocations(selectedMovieId)
    .then(selectMovieLocations => {
      $("#Back").show();
      return locationsData.matchedLocations(selectMovieLocations);
    })
    .then(filteredLocations => {
      locationsComponent.writeFilteredLocations(filteredLocations);
    })
    .catch(error => {
      console.error(error);
    });
};

//Data for movie cards
const initializeMovieView = () => {
  movieData
    .loadMovies()
    .then(movies => {
      writeMovies(movies);
    })
    .catch(error => {
      console.error(error);
    });
};

export default { initializeMovieView, selectedMovie };
