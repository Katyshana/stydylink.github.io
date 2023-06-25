function googleAuth(){
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {

 



    var user = result.user;
    console.log(user)
    createUserDb(user.uid, user.displayName,`сірісук`,user.email,`0985155645`)
 
 
  }).catch((error) => {
    
    var errorCode = error.code;
    var errorMessage = error.message;

    var email = error.email;
    console.log(email)
    console.log(errorMessage)
    console.log(errorCode)


  });

function logiAuth(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(`yspix`)
          var uid = user.uid;
         
        } else {
          // User is signed out
          // ...
        }
      });
}
}

function createUserDb(id, name,lastname,email,phone){
    let newUser = {
        name:name,
        lastname:lastname,
        email:email,
        phone:phone,
        isAdmin: false
    }
    db.collection(`first_reg`).doc(id).set(newUser).then(res => {
        console.log(`yspix`)
    })


}