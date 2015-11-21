var app = angular.module('timeClockApp');

app.controller('UserController', function($scope, timeService, $firebaseObject, $firebaseArray, $firebaseAuth){

	var ref = new Firebase("https://time-clock-v1.firebaseio.com/");


	ref.onAuth(function(authData) {
		if (authData) {
			console.log("Authenticated with uid:", authData.uid);
		} else {
			console.log("Client unauthenticated.")
		}
	});



});