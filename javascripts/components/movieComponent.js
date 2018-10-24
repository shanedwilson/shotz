const writeMovies = arrayofMovies => {
    let domString = '';
    arrayofMovies.forEach(movie => {
    domString += `
    <div class="movie card col-md-3 px-0 m-3" style="width: 18rem;">
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

export default {writeMovies}    