var firebase = require('firebase');
// Initialize Firebase
//adds a ton of request headers to authenticate
try {
  var config = {
    apiKey: "AIzaSyAeYD2r0_Zv-mRIqCEHsHokMoEhpbx31vM",
    authDomain: "blogtrial-48abb.firebaseapp.com",
    databaseURL: "https://blogtrial-48abb.firebaseio.com",
    projectId: "blogtrial-48abb",
    storageBucket: "blogtrial-48abb.appspot.com",
    messagingSenderId: "519267378031"
  };
    
    firebase.initializeApp(config);
} catch(e) {
    console.log(e);
}

module.exports = firebase;