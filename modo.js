
var ref = new Firebase('https://loginproteco.firebaseio.com/');
var auth = new FirebaseSimpleLogin(ref, function(error, user) {
  if (error) {
    console.log('Authentication error: ', error);
  } else if (user) {
    console.log('User ' + user.id + ' authenticated via the ' + user.provider + ' provider!');
  } else {
    console.log("User is logged out.")
  }
});
$(function(){
	$("#fbconect").click(function(){
 /*auth.login('facebook',{ 
  remember: true,
  scope: 'email,user_likes'
});*/
ref.authWithOAuthPopup("facebook", function(error, authData), {
  remember: "sessionOnly",
  scope: "email,user_likes"
});
	});
});

