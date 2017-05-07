
var providerFB = new firebase.auth.FacebookAuthProvider();

providerFB.addScope('user_friends');

var authService = firebase.auth();

document.getElementById('fbconect').addEventListener('click', function()
	{
		authService.signInWithPopup(providerFB)
			.then(function(result)
			{
 console.log('Autenticado usuario ', result.user.displayName);
			})
			.catch(function(error)
			{
				console.log('Detectado un error: ', error);
			});
	});