'use strict';

/* Controllers */

spruce.
  controller('NewEntryCtrl', ['$scope', function($scope) {
  	$scope.stage = 1;
  	$scope.emotions = [];
  	$scope.update = function(thing){
  		$scope.next = "andale";
  		console.log("thanks boss, I've recieved the thing: " + angular.toJson(thing, true));
  	}
  	$scope.addEmotion = function(newEmotion){
  		$scope.emotions.push(newEmotion);
  	}


  }]).
  controller('MainCtrl',['$scope', function($scope){

  }]).
  controller('RegistrationCtrl'['_Parse', function(_parse){

  }]);