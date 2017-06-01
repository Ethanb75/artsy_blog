var firebase = require('firebase');
// Initialize Firebase
//adds a ton of request headers to authenticate
try {
// var config = {
  //   apiKey: "<API_KEY>",
  //   authDomain: "<PROJECT_ID>.firebaseapp.com",
  //   databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  //   storageBucket: "<BUCKET>.appspot.com",
  // };
  
  var config = {
    apiKey: "AIzaSyAeYD2r0_Zv-mRIqCEHsHokMoEhpbx31vM",
    authDomain: "blogtrial-48abb.firebaseapp.com",
    databaseURL: "https://blogtrial-48abb.firebaseio.com",
    storageBucket: "blogtrial-48abb.appspot.com"
  }
    // var config = {
    //     apiKey: process.env.API_KEY,
    //     authDomain: process.env.AUTH_DOMAIN,
    //     databaseURL: process.env.DATABASE_URL,
    //     storageBucket: process.env.STORAGE_BUCKET,
    // };
    firebase.initializeApp(config);
} catch(e) {
    console.log(e);
}

// var firebaseRef = firebase.database().ref()

module.exports = firebase;