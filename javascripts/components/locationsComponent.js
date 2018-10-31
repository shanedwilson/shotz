import locationsData from "../data/locationsData.js";
import movieData from '../data/movieData.js'

const writeLocations = arrayofLocations => {
  $("#locations-div").empty();
  let domString = "";
  arrayofLocations.forEach(location => {
    domString += `
                <div id="${location.id}"class="location card col-md-3 px-0 m-3">
                    <div class="card-body d-flex flex-column">
                        <div class="thumbnail">
                            <img src="${location.locationImg}" 
                            alt="" width="100%">
                        </div>
                        <div class="caption">
                            <h3 id="thumbnail-label" class="text-center">${
                              location.name
                            }</h3>
                            <p class='text-center'>
                                <span class="address">${location.address}</span>
                            </p>
                        </div>
                        <div class="text-center mt-auto">Used in ${location.movies.length} movies</div>
                        <div class="caption card-footer mt-auto">
                            <p class="time text-center">${location.time}</p>
                        </div>    
                    </div>
                </div>
        `;
  });
  //write to dom
  $("#locations-div").append(domString);
  timeColor();
};

const writeFilteredLocations = filteredLocations => {
  $("#locations-div").empty();
  let domString = "";
  filteredLocations.forEach(location => {
    domString += `
                <div id="${location.id}"class="location card col-md-3 px-0 m-3">
                    <div class="card-body d-flex flex-column">
                        <div class="thumbnail">
                            <img src="${location.locationImg}" 
                            alt="" width="100%">
                        </div>
                        <div class="caption">
                            <h3 id="thumbnail-label" class="text-center">${
                              location.name
                            }</h3>
                            <p class='text-center'>
                                <span class="address">${location.address}</span>
                            </p>
                        </div>
                        <div class="caption card-footer mt-auto">
                            <p class="time text-center">${location.time}</p>
                        </div>    
                    </div>
                </div>
        `;
  });
  //write to dom
  $("#locations-div").append(domString);
  timeColor();
};

//Search function for locations
const chosenLocations = input => {
  $(".location").each((i, location) => {
    $(location)
      .not(":icontains(" + input + ")")
      .hide();
  });
};

//Function for time buttons
const chosenTime = selectedBtn => {
  if (selectedBtn === "All") {
    $(".location").show();
    $(".form-control").blur();
    $(".form-control").val("");
  } else {
    $(".location").each((i, location) => {
      $(location).show();
      $(location)
        .not(":contains(" + selectedBtn + ")")
        .hide();
    });
  }
};

//Function to match location footer color to time button color
const timeColor = () => {
  let times = $(".time");
  times.each((i, time) => {
    if ($(time).html() === "Morning") {
      $(time).addClass("bg-warning");
    } else if ($(time).html() === "Afternoon") {
      $(time).addClass("bg-primary");
    } else if ($(time).html() === "Evening") {
      $(time).addClass("bg-success");
    } else if ($(time).html() === "After Dark") {
      $(time).addClass("bg-secondary");
    }
  });
};

//Psuedo for jquery contains to change case of input text
$.expr[":"].icontains = $.expr.createPseudo(function(text) {
  return function(e) {
    return (
      $(e)
        .text()
        .toUpperCase()
        .indexOf(text.toUpperCase()) >= 0
    );
  };
});

//Data for initial all locations view
// const initialLocationsView = () => {
//   locationsData
//     .loadLocations()
//     .then(locations => {
//       writeLocations(locations);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };

//Data for initial all locations view
const initialLocationsView = () => {
  locationsData.loadLocations().then((locations) => {
    movieData.loadMovies().then((movies) => {
      const locationsForMovies = locations.map((location) => {
        const specificLocation = location;
        specificLocation.movies = movies.filter(movie => movie.locations.includes(location.id));
        return specificLocation;
      });
      writeLocations(locationsForMovies);
    });
  }).catch((error) => {
    console.error(error);
  });
};

//Function to show matched locations to clicked movie
const hideLocations = movieLocations => {
  $(".location").each((i, location) => {
    for (let i = 0; i < movieLocations.length; i++) {
      if ($.inArray(location.id, movieLocations) == -1) {
        $(location).hide();
      }
    }
  });
};

export default {
  initialLocationsView,
  chosenLocations,
  chosenTime,
  hideLocations,
  writeLocations,
  writeFilteredLocations
};
