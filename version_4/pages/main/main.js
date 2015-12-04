angular.module('timeClockApp')
.controller('mainPageController', function($scope, $location, userService, fb, $firebaseAuth, $firebaseObject, $firebaseArray){

    $scope.user = userService.getLoggedInUser();

	var ref = new Firebase("https://time-clock-v1.firebaseio.com/");
	$scope.data = $firebaseObject(ref);

    $scope.logout = function(){  
        userService.logout();
    }

});