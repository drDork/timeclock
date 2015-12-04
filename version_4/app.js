angular.module('timeClockApp', ['ngRoute', 'firebase'])
.constant('fb', {
  url: 'https://time-clock-v1.firebaseio.com/'
})
.config(function($routeProvider){
        $routeProvider.
            when('/login', {
                templateUrl: 'pages/login/login.html'
            }).
            when('/main', {
                templateUrl: 'pages/main/main.html'
            }).
            when('/thread/:threadId', {
                templateUrl: 'pages/thread/thread.html'
            }).
            otherwise({
                redirectTo: '/login'
            });
});
 






/* 

CURRENT ISSUES

1 - loading data before google signin. Need to have original page
just display the login button and current time. Once user is signed
in then the information should display. 

2 - should be fixed by button so that there is not a pop up. 
browsers aren't liking the pop up. Not a long term solution, but 
reasonable for now. 

3 - need a way to add data to user

4 - need to only display the users data not all data


*/