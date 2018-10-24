import locationsData from "./data/locationsData.js"
import movieComponent from "./components/movieComponent.js"

const loadApp = () => {
    locationsData.loadLocations();
    movieComponent.initializeMovieView();
}

loadApp();