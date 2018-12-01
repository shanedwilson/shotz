import $ from 'jquery';

import locationsComponent from '../components/locationsComponent';
import movieComponent from '../components/movieComponent';
import locationsData from './data/locationsData';

$('#search').keyup(() => {
  locationsComponent.chosenLocations($('.form-control').val());
});

$('#search').submit((event) => {
  event.preventDefault();
  $('.form-control').blur();
  $('.form-control').val('');
});

const timeEvent = () => {
  $('.time-button').on('click', (e) => {
    const timeId = e.target.id;
    locationsData.locationsByTime(timeId)
      .then((timeLocations) => {
        locationsComponent.writeFilteredLocations(timeLocations);
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

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

const bindEvents = () => {
  timeEvent();
};

export default { bindEvents };
