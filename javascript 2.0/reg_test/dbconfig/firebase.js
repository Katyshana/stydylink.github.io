const firebaseConfig = {
    apiKey: "AIzaSyBx1CTo-Cjla5mVJ599lzN8gveBrcrl9Os",
    authDomain: "black-kirill.firebaseapp.com",
    projectId: "black-kirill",
    storageBucket: "black-kirill.appspot.com",
    messagingSenderId: "1004907917915",
    appId: "1:1004907917915:web:d0b4c768c523c0a649457e"
  };
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var provider = new firebase.auth.GoogleAuthProvider();
