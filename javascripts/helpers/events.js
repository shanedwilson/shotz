import locationsComponent from "../components/locationsComponent.js"
import movieComponent from "../components/movieComponent.js"

$( "#search" ).keyup(function () {
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
    movieComponent.loadMovieLocations(selectedMovieId);
})