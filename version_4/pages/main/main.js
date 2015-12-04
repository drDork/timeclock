angular.module('timeClockApp')
.controller('mainPageController', function($scope, $location, userService, fb, $firebaseAuth){

    $scope.user = userService.getLoggedInUser();


    $scope.logout = function(){  
        userService.logout();
    }

});