'use strict';


// angular.module('urlConstant', []).constant('apiUrl', 'http://hikehk.herokuapp.com/')

// angular module definition
angular.module('App', ['ionic','uiGmapgoogle-maps'])


// add new config method, inject $stateProvider
.config(function($stateProvider, $urlRouterProvider, $httpProvider, uiGmapGoogleMapApiProvider) {

// Below not needed?
// uiGmapGoogleMapApiProvider.configure({
 //        key: 'AIzaSyB0q16fXHEhUEaXejUMJlDAOrQVcFChn2w',
 //        v: '3.17',
 //        libraries: 'weather,geometry,visualization'
 //    });

	//httpProvider for authentication
	$httpProvider.defaults.withCredentials = true;

	// declare first state of the home view
	$stateProvider
	// 	.state('index', {
	// 	// the state is given a url that can be used with anchor links
	// 	url: '/',
	// 	// tell the state to load a template from a given url when view is active
	// 	templateUrl: 'index.html'
	// })
	.state('landing', {
		// the state is given a url that can be used with anchor links
		url: '/landing',
		// tell the state to load a template from a given url when view is active
		templateUrl: 'views/landing/landing.html'
	})
	.state('home', {
		// the state is given a url that can be used with anchor links
		url: '/home',
		// tell the state to load a template from a given url when view is active
		templateUrl: 'views/home/home.html'
	})
	.state('reservation', {
		url: '/reservation',
		// declare the name of the controller for this view. note that home doesn't have a a controller
		controller: 'ReservationController',
		templateUrl: 'views/reservation/reservation.html'
	})
	.state('pickupreq', {
		url: '/pickupreq',
		controller: 'PickupreqCtrl',
		templateUrl: 'views/pickupreq/pickupreq.html'
	})	
	.state('googlemap', {
		url: '/googlemap',
		controller: 'MapController',
		templateUrl: 'views/pickupreq/googlemap.html'
	})
	.state('googlemap2', {
		url: '/googlemap2',
		controller: 'MapController2',
		templateUrl: 'views/pickupreq/googlemap2.html'
	})
	.state('pickuplocation', {
		url: '/pickuplocation',
		controller: 'MapCtrl',
		templateUrl: 'views/pickupreq/pickuplocation.html'
	})
	.state('trackreq', {
		url: '/trackreq',
		controller: 'TrackreqCtrl',
		templateUrl: 'views/trackreq/trackreq.html'
	})
	.state('processingreq', {
		url: '/processingreq',
		controller: 'ProcessingreqCtrl',
		templateUrl: 'views/trackreq/processingreq.html'
	})
	.state('closedreq', {
		url: '/closedreq',
		controller: 'ClosedreqCtrl',
		templateUrl: 'views/trackreq/closedreq.html'
	})
	.state('tripsearch', {
		url: '/tripsearch',
		controller: 'TripsearchCtrl',
		templateUrl: 'views/trip/tripsearch.html'
	})
	.state('tripfilter', {
		url: '/tripfilter',
		controller: 'TripfilterCtrl',
		templateUrl: 'views/trip/tripfilter.html'
	})
	.state('login', {
		url: '/login',	
		// note: where is this defined?? in login.js
		controller: 'LoginCtrl',
		templateUrl: 'views/users/login.html'
	})
	.state('signup', {
		url: '/signup',
		controller: 'SignUpCtrl',
		templateUrl: 'views/users/signup.html'
	})
	.state('logout', {
		url: '/logout',
		controller: 'LogoutCtrl',
		templateUrl: 'views/users/logout.html'
	});	
	// declare fallback url to go to if the app cannot find the requested state, like the 404 error page on website. it user requests state that doesn't exist -  the otherwise route will be used to display home view.

	$urlRouterProvider.otherwise('/landing');

})


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

