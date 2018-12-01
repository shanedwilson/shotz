import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

// Load Locations
const loadLocations = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/locations.json`)
    .then((results) => {
      const locationsObject = results.data;
      const locationsArray = [];
      if (locationsObject !== null) {
        Object.keys(locationsObject).forEach((locationId) => {
          locationsObject[locationId].id = locationId;
          locationsArray.push(locationsObject[locationId]);
        });
      }
      resolve(locationsArray);
    })
    .catch((error) => {
      reject(error);
    });
});

const locationsByTime = timeId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/locations.json?orderBy="time"&equalTo="${timeId}"`)
    .then((results) => {
      const timeLocationsObject = results.data;
      const timeLocationsArray = [];
      if (timeLocationsObject !== null) {
        Object.keys(timeLocationsObject).forEach((location) => {
          timeLocationsObject[location].id = location;
          timeLocationsArray.push(timeLocationsObject[location]);
        });
      }
      resolve(timeLocationsArray);
    })
    .catch((error) => {
      reject(error);
    });
});

// const matchedLocations = selectMovieLocations => {
//   return new Promise((resolve, reject) => {
//     $.get("../db/locations.json")
//       .done(data => {
//         let filteredLocations = [];
//         selectMovieLocations.forEach(movieLocation => {
//           const filteredLoc = data.locations.filter(location => {
//             return location.id === movieLocation;
//           });
//           filteredLocations.push(filteredLoc[0]);
//         });
//         resolve(filteredLocations);
//       })
//       .fail(error => {
//         reject(error);
//       });
//   });
// };

export default { loadLocations, locationsByTime };
