import { $, getUrlVars } from "./modules/utils.js";
//import * as orderform from  "./modules/orderform.js";
import {storage, database} from "./modules/firebase.js";

var selectedFile;

/*
TODO:

Also allow users to upload a custom ID for the file

User error handling and prevention for file uploads 
(shouldn't be able to upload without filling out valid forms)

Seperate pages out between file uploads and viewing sound

Add Google Authentication

Error handling for:
  trying to upload a file with an order ID that already exists (currently overwrites it)


*/

(function() {
    'use strict';
    // Your code here
    // All function and variables are scoped to this function

    //orderform.checkSetup();

    // Retrieves the url param called "id" from the url
    let urlID = getUrlVars()["id"];


    // Looks into the database, and retrieves a snapshot
    // The snapshot.val() object's property names are the ids
    // Constant time lookup :D
    var ref = database.ref("/Uploads/");
    ref.on("value", (snapshot) => {

      // Get the metadata related to the id
      let retrievedUpload = snapshot.val()[urlID];

      // Set its download link to be the source of the audio player
      $("audioSource").src = retrievedUpload.url;
      $("audio").load();
      
    }, (error) => {
      console.log("The read failed: " + error.code);
    })



    // Event listeners
    $("fileUpload").addEventListener("change", function(event) {
      selectedFile = event.target.files[0];
    });

    
  })();


// Function to upload to database
const uploadFile = () => {


  // Get the file name, make up a bucket to put it in and upload it.
  var fileName = selectedFile.name;
  var storageRef = storage.ref('/customerAudio/' + fileName);
  var uploadTask = storageRef.put(selectedFile);

  // When the task is finished...
  uploadTask.on('state_changed', function(snapshot) {

  }, function(error) {
    // Upon error during upload
    console.log(error);
  }, function() {
    // Handles successful uploads

    // Get the download URL
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    
      // Once we have the download URL, push to a new key in the database
      // by creating an updates object and updating the database with it.
      /*
      let postKey = database.ref("Uploads/").push().key;
      let updates = {};
      let postData = {
        orderID:$("orderID").value,
        url: downloadURL
      };
      updates["/Uploads/" + postKey] = postData;
      database.ref().update(updates);
      */

      // Uploads the metadata from the earlier file upload under the given
      // key, can be overwritten if the same key is submitted.
      let orderID = $("orderID").value;

      database.ref("Uploads/").child(orderID).set({url: downloadURL});

      // Clears the form
      $("uploadForm").reset();
      $("uploadButtonFeedback").innerText = "Your upload link is: " + "https://waveyapp.herokuapp.com/?id=" + orderID;
    });
    
  });

}

// Explictly giving functions from main module to the importing page.
window.uploadFile = uploadFile;



