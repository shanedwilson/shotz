import locationsComponent from "./components/locationsComponent.js";
import movieComponent from "./components/movieComponent.js";

const loadApp = () => {
  locationsComponent.initialLocationsView();
  movieComponent.initializeMovieView();
  $("#Back").hide();
};

loadApp();
