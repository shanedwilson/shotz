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

const matchedLocations = selectMovieLocations => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/locations.json`)
    .then((results) => {
      const matchedLocationsObject = results.data;
      const matchedLocationsArray = [];
      if (matchedLocationsObject !== null) {
        Object.keys(matchedLocationsObject).forEach((location) => {
          matchedLocationsObject[location].id = location;
          matchedLocationsArray.push(matchedLocationsObject[location]);
        });
        const filteredLocations = [];
        selectMovieLocations.forEach((movieLocation) => {
          const filteredLoc = matchedLocationsArray
            .filter(location => location.id === movieLocation);
          filteredLocations.push(filteredLoc[0]);
          resolve(filteredLocations);
        });
      }
    })
    .catch((error) => {
      reject(error);
    });
});

export default { loadLocations, locationsByTime, matchedLocations };
