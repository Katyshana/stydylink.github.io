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

function add_user(){ 
    let new_user={
        name:document.getElementById(`user_name`).value,
        lastname:document.getElementById(`user_lastname`).value,
        email:document.getElementById(`user_email`).value,
        password:document.getElementById(`user_password`).value
    }
db.collection('usersNEW').add(new_user).then(function(){
    console.log('успіх')
})
}