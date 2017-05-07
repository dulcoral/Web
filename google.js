var providerG = new firebase.auth.GoogleAuthProvider();
providerG.addScope('https://www.googleapis.com/auth/plus.login');

document.getElementById("ggconect").addEventListener("click", myFunction);

function myFunction() {
firebase.auth().signInWithPopup(providerG).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
console.log("Hola", user.displayName )

}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
}); 
}