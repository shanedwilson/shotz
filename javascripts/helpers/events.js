import locationsComponent from "../components/locationsComponent.js"

    // $("#input").submit(function () {
    //     // const searchText = $(e.target).value();
    //     console.log("Clicked!");
    // })

    $( "#input" ).submit(function( event ) {
        alert( "Handler for .submit() called." );
        event.preventDefault();
      });

const eventHandler = () => {
};

export default {eventHandler}