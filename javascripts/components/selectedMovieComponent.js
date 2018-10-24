const selectedMovie = (selectedMovieId) => {
  $(".movie").each((i, movie) => {
    if (selectedMovieId !== movie.id) {
      $(movie).addClass('d-none');
    }
  })
}

export default {selectedMovie}