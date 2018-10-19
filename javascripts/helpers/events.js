import locationsComponent from "../components/locationsComponent.js"

$( "#search" ).submit(function( event ) {
    $( ".form-control" ).blur();
    event.preventDefault();
    locationsComponent.chosenLocations($(".form-control").val());
    $('.form-control').val("");
});

$('body').on('click', (e) => {
    const selectedBtn = $(e.target).closest('button').attr('id');
    locationsComponent.chosenTime(selectedBtn);
});