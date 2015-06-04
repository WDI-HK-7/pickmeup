//not sure what's supposed to be here................ since it's in platform and not www/views/reservation

//reference App module
angular.module('App')

//declare controller, providing name of controller than a function. 
//the controller provides a place for us to hold our data and use Angular's binding features.
//the controller needs a template (e.g. home.html) file to display information. 
//the major diff between the template for this controller and the home.html is that we'll bind data from the controller into the template.
.controller('ReservationController', function ($scope) {

	//attaching a model object called reservation to the $scope.
  $scope.reservation = {
  	// setting the dates for the stay, automatically calculating today to next week
    checkin: new Date(),
    checkout: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    // setting other static values for the reservation
    room: 156,
    rate: 121,
    wifi: 'resortwifi'
  };
});
