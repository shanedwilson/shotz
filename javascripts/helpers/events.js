import locationsComponent from "../components/locationsComponent.js"
import movieComponent from "../components/movieComponent.js"
import locationsData from "../data/locationsData.js"
import movieData from "../data/movieData.js"

$( "#search" ).keyup(function( event ) {
    locationsComponent.chosenLocations($(".form-control").val());
});

$( "#search" ).submit(function (event) {
     event.preventDefault();
    $( ".form-control" ).blur();
    $('.form-control').val("");
});

$('button').on('click', (e) => {
    const selectedBtn = $(e.target).closest('button').attr('id');
    locationsComponent.chosenTime(selectedBtn);
});

$('#movie-container').on('click', (e) => {
    const selectedMovieId = $(e.target).closest('.movie').attr('id');
    movieComponent.selectedMovie(selectedMovieId);
    locationsComponent.selectedLocationsView(selectedMovieId);
    movieComponent.loadMovieLocations(selectedMovieId);
})