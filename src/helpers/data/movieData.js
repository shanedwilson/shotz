import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const loadMovies = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movie.json`)
    .then((results) => {
      const moviesObject = results.data;
      const moviesArray = [];
      if (moviesObject !== null) {
        Object.keys(moviesObject).forEach((movieId) => {
          moviesObject[movieId].id = movieId;
          moviesArray.push(moviesObject[movieId]);
        });
      }
      resolve(moviesArray);
    })
    .catch((error) => {
      reject(error);
    });
});

// const getMovieLocations = selectedMovieId => new Promise((resolve, reject) => {
//   axios.get(`${firebaseUrl}/movie.json`)
//     .then((results) => {
//       console.log(results);
//       const selectMovieLocations = results.data.find(movie => movie.id === selectedMovieId)
//         .locations;
//       resolve(selectMovieLocations);
//     })
//     .catch((error) => {
//       reject(error);
//     });
// });

const getMovieLocations = selectedMovieId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movie.json`)
    .then((results) => {
      const moviesObject = results.data;
      const moviesArray = [];
      if (moviesObject !== null) {
        Object.keys(moviesObject).forEach((movieId) => {
          moviesObject[movieId].id = movieId;
          moviesArray.push(moviesObject[movieId]);
        });
      }
      const selectMovieLocations = moviesArray.find(movie => movie.id === selectedMovieId)
        .locations;
      resolve(selectMovieLocations);
    })
    .catch((error) => {
      reject(error);
    });
});

export default { loadMovies, getMovieLocations };
