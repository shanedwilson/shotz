import locationsComponent from "../components/locationsComponent.js"

$( "#search" ).submit(function( event ) {
    $( ".form-control" ).blur();
    event.preventDefault();
    locationsComponent.chosenLocations($(".form-control").val());
});

const eventHandler = () => {
};

export default {eventHandler}