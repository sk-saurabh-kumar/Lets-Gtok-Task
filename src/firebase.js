import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCLDEVfFOmv9DHQrz5O6RSChsEKTkslb54",
    authDomain: "lets-gtok.firebaseapp.com",
    projectId: "lets-gtok",
    storageBucket: "lets-gtok.appspot.com",
    messagingSenderId: "331123588902",
    appId: "1:331123588902:web:935cf3936cd73e79d80be7"
  });

  var db = firebaseApp.firestore();

  export { db };