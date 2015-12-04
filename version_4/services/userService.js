angular.module('timeClockApp').service('userService', function($firebaseAuth, fb, $location){

    //Todo: don't hardcode this
    var user = {
        name: '', 
        profilePic: ''
    };

    var ref = new Firebase(fb.url);
    var authObj = $firebaseAuth(ref);

    var info = authObj.$getAuth();
    if(info){
    	user.name = info.google.displayName;
        user.profilePic = info.google.profileImageURL;	
    }
    

    this.getLoggedInUser = function(){
        return user;
    }

    this.loginWithGoogle = function(){
    	authObj.$authWithOAuthPopup("google").then(function(authData) {
            console.log(authData.google);
    		user.name = authData.google.displayName; 
            user.profilePic = authData.google.profileImageURL;
    		$location.path('main')    		
  			console.log("Logged in as:", authData.uid);
		}).catch(function(error) {
 		console.error("Authentication failed:", error);
		});
        
    }

    this.logout = function(){    
        authObj.$unauth()
        $location.path('login');
    }

});


