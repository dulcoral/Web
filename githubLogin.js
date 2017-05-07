var providerGitHub = new firebase.auth.GithubAuthProvider();

providerGitHub.addScope('repo');

var authService = firebase.auth();

document.getElementById('ghconect').addEventListener('click', function()
	{
		authService.signInWithPopup(providerGitHub)
		.then(function(result)
		{
			
			console.log("hola: ");
		})
		.catch(function(error)
		{
			console.log('Detectado un error: ', error);
		});
	});
