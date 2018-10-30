// Load Locations
const loadLocations = () => {
  return new Promise((resolve, reject) => {
    $.get("../db/locations.json")
      .done(data => {
        resolve(data.locations);
      })
      .fail(error => {
        reject(error);
      });
  });
};

const matchedLocations = selectMovieLocations => {
  return new Promise((resolve, reject) => {
    $.get("../db/locations.json")
      .done(data => {
        let filteredLocations = [];
        selectMovieLocations.forEach(movieLocation => {
          const filteredLoc = data.locations.filter(location => {
            return location.id === movieLocation;
          });
          filteredLocations.push(filteredLoc[0]);
        });
        resolve(filteredLocations);
      })
      .fail(error => {
        reject(error);
      });
  });
};

export default { loadLocations, matchedLocations };
