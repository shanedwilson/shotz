import locationsComponent from "./components/locationsComponent.js"
import movieComponent from "./components/movieComponent.js"
// import events from "./helpers/events.js"

const loadApp = () => {
    locationsComponent.initialLocationsView();
    movieComponent.initializeMovieView();
    $('#Back').hide();
}

loadApp();