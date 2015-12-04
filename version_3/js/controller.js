var app = angular.module('timeClockApp');

app.controller('ClockController', function($scope, timeService, $firebaseObject, $firebaseArray, $firebaseAuth){

	var ref = new Firebase("https://time-clock-v1.firebaseio.com/");


	$scope.time = new Date().toLocaleString();

	$scope.data = {};


$scope.login = function(){
	ref.authWithOAuthPopup("google", function(error, authData) {
		if (error) {
			console.log("Login Failed!", error);
		} else {
			console.log("Authenticated successfully with payload:", authData);
		}
	});
}

ref.onAuth(function(authData) {
	if (authData) {
		$scope.data = $firebaseObject(ref);
		console.log("scope data", $scope.data);
		$scope.googleDataImg = authData.google.profileImageURL;
		$scope.googleDataName = authData.google.displayName; 
		console.log("Authenticated with uid:", authData.uid);

	} else {
		console.log("Client unauthenticated.")
	}
});





ref.on('child_changed', function(data, prevChildKey){
	$scope.$apply(function(){
		console.log("hi", data.val());
	})
	
	// if(!data.val().users[$scope.googleDataName]){
	// 	var userObj = {};
	// 	userObj[$scope.googleDataName] = {timeLog: []};
	// 	addUser(userObj);
	// } 
});


function addUser(userObj){
	var usersRef = ref.child('users');
	usersRef.set(userObj);
}

// get firebase data 
// authenticate 
// see if name is in firebase data
// if name is not in firebase data, add to firebase data
// reload data from firebase (use child added function)




});

