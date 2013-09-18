'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
spruce.
	service();

angular.module('phonecatServices', ['ngResource']).
    factory('Phone', function($resource){
  return $resource('phones/:phoneId.json', {}, {
    query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
  });
});