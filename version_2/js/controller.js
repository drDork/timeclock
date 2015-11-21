var app = angular.module('timeClockApp');

app.controller('ClockController', function($scope, timeService, $firebaseObject, $firebaseArray, $firebaseAuth){

	var ref = new Firebase("https://time-clock-v1.firebaseio.com/");

	$scope.data = $firebaseObject(ref);



	ref.authWithOAuthPopup("google", function(error, authData) {
		if (error) {
			console.log("Login Failed!", error);
		} else {
			console.log("Authenticated successfully with payload:", authData);
		}
	});

	ref.onAuth(function(authData) {
		if (authData) {
			$scope.googleData = authData.google.profileImageURL; 
			console.log("Authenticated with uid:", authData.uid);
		} else {
			console.log("Client unauthenticated.")
		}
	});







});

