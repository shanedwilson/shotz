import firebase from 'firebase/app';
import 'bootstrap';
import $ from 'jquery';

import apiKeys from '../db/apiKeys.json';

import locationsComponent from './components/locationsComponent';
import movieComponent from './components/movieComponent';

const loadApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  locationsComponent.initialLocationsView();
  movieComponent.initializeMovieView();
  $('#Back').hide();
};

loadApp();
