import locationsComponent from "../components/locationsComponent.js"

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