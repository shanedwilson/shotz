import locationsComponent from '../components/locationsComponent';
import movieComponent from '../components/movieComponent';

$('#search').keyup(() => {
  locationsComponent.chosenLocations($('.form-control').val());
});

$('#search').submit((event) => {
  event.preventDefault();
  $('.form-control').blur();
  $('.form-control').val('');
});

$('button').on('click', (e) => {
  const selectedBtn = $(e.target)
    .closest('button')
    .attr('id');
  console.log(selectedBtn);
  locationsComponent.chosenTime(selectedBtn);
});

$('#movie-container').on('click', (e) => {
  const selectedMovieId = $(e.target)
    .closest('.movie')
    .attr('id');
  movieComponent.selectedMovie(selectedMovieId);
});

$('#Back').on('click', () => {
  $('#Back').hide();
  $('#All').show();
  locationsComponent.initialLocationsView();
  movieComponent.initializeMovieView();
});
