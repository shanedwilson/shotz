const writeMovies = arrayofMovies => {
    let domString = '';
    arrayofMovies.forEach(movie => {
    domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${movie.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Genre: ${movie.genre}</h6>
      <h6 class="card-subtitle mb-2 text-muted">Est. Release Date: ${movie.release}</h6>
      <p class="card-text">${movie.description}</p>
    </div>
  </div>
    `
    });
    $("#movie-div").append(domString);
};    

export default {writeMovies}    