import locationsData from "./data/locationsData.js"
import movieData from "./data/movieData.js"

const loadApp = () => {
    locationsData.loadLocations();
    movieData.loadMovies();
}

loadApp();