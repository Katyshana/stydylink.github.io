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
let massive = []
db.collection(`users`).get().then(function(res){
    res.forEach (function(doc){ 
        
        massive.push(doc.data())
    });
})
console.log(massive)

function drawUsers(){
    let tbody = document.getElementById(`tbody`);
    let users_tbody = ``;
    massive.map(function(user){
        users_tbody +=`
        <tr>
        <td>${user.name}</td>
        <td>${user.lastname}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
    </tr>`
    })

    tbody.innerHTML = users_tbody;
}
