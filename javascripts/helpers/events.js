import locationsComponent from "../components/locationsComponent.js"
import selectedMovieComponent from "../components/selectedMovieComponent.js"
import locationsData from "../data/locationsData.js"

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

$('body').on('click', (e) => {
    const selectedMovieId = $(e.target).closest('.movie').attr('id');
    selectedMovieComponent.selectedMovie(selectedMovieId);
    locationsData.loadLocationsForMovie(selectedMovieId);
})