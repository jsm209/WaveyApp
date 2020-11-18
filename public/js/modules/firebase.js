  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAtmAQ_lAjEP9acIPTPSa61kPxZBB5Xk3U",
    authDomain: "wavey-3c24f.firebaseapp.com",
    databaseURL: "https://wavey-3c24f.firebaseio.com",
    projectId: "wavey-3c24f",
    storageBucket: "wavey-3c24f.appspot.com",
    messagingSenderId: "63704815258",
    appId: "1:63704815258:web:c5713d8e8c27f01440f123"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Setting up firebase apps
var storage = firebase.storage();
var database = firebase.database();


export {storage, database};




