angular.module('App')

//below for google maps. Document suggested this controller added as part of app.js but we are having this in this directory to keep consistent with other files


// option 3 - testing 

.controller('MapController', function($scope, $ionicLoading, $compile) {
  function initialize() {
    var site = new google.maps.LatLng(55.9879314,-4.3042387);
    var hospital = new google.maps.LatLng(55.8934378,-4.2201905);
  
    var mapOptions = {
      streetViewControl:true,
      center: site,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
    
    //Marker + infowindow + angularjs compiled ng-click
    var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
    var compiled = $compile(contentString)($scope);

    var infowindow = new google.maps.InfoWindow({
      content: compiled[0]
    });

    var marker = new google.maps.Marker({
      position: site,
      map: map,
      title: 'Strathblane (Job Location)'
    });
    
    var hospitalRoute = new google.maps.Marker({
      position: hospital,
      map: map,
      title: 'Hospital (Stobhill)'
    });
    
    var infowindow = new google.maps.InfoWindow({
         content:"Project Location"
    });

    infowindow.open(map,marker);
    
    var hospitalwindow = new google.maps.InfoWindow({
         content:"Nearest Hospital"
    });

    hospitalwindow.open(map,hospitalRoute);
   
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    $scope.map = map;
    
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();

    var request = {
        origin : site,
        destination : hospital,
        travelMode : google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });

    directionsDisplay.setMap(map); 
   
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  $scope.centerOnMe = function() {
    if(!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });
    navigator.geolocation.getCurrentPosition(function(pos) {
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function(error) {
      alert('Unable to get location: ' + error.message);
    });
  };
  
  $scope.clickTest = function() {
    alert('Example of infowindow with ng-click')
  };
  
});


// option 1 - works with showing current location

// .controller('MapController', function($scope, $ionicLoading) {
 
 //    google.maps.event.addDomListener(window, 'load', function() {
 //        // shows Tokyo:
 //        var myLatlng = new google.maps.LatLng(35.313038, 139.786068);
 //        // shows LA:
 //        // var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
 
 //        var mapOptions = {
 //            center: myLatlng,
 //            zoom: 16,
 //            mapTypeId: google.maps.MapTypeId.ROADMAP
 //        };
 
 //        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
 //        navigator.geolocation.getCurrentPosition(function(pos) {
 //            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
 //            var myLocation = new google.maps.Marker({
 //                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
 //                map: map,
 //                title: "My Location"
 //            });
 //        });
 
 //        $scope.map = map;
 //    });


// });

// option 2 - shows path from set one point to another set point

// .controller('MapController', function($scope, $ionicLoading, $compile) {
//   function initialize() {
//     var site = new google.maps.LatLng(55.9879314,-4.3042387);
//     var hospital = new google.maps.LatLng(55.8934378,-4.2201905);
  
//     var mapOptions = {
//       streetViewControl:true,
//       center: site,
//       zoom: 18,
//       mapTypeId: google.maps.MapTypeId.TERRAIN
//     };
//     var map = new google.maps.Map(document.getElementById("map"),
//         mapOptions);
    
//     //Marker + infowindow + angularjs compiled ng-click
//     var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
//     var compiled = $compile(contentString)($scope);

//     var infowindow = new google.maps.InfoWindow({
//       content: compiled[0]
//     });

//     var marker = new google.maps.Marker({
//       position: site,
//       map: map,
//       title: 'Strathblane (Job Location)'
//     });
    
//     var hospitalRoute = new google.maps.Marker({
//       position: hospital,
//       map: map,
//       title: 'Hospital (Stobhill)'
//     });
    
//     var infowindow = new google.maps.InfoWindow({
//          content:"Project Location"
//     });

//     infowindow.open(map,marker);
    
//     var hospitalwindow = new google.maps.InfoWindow({
//          content:"Nearest Hospital"
//     });

//     hospitalwindow.open(map,hospitalRoute);
   
//     google.maps.event.addListener(marker, 'click', function() {
//       infowindow.open(map,marker);
//     });

//     $scope.map = map;
    
//     var directionsService = new google.maps.DirectionsService();
//     var directionsDisplay = new google.maps.DirectionsRenderer();

//     var request = {
//         origin : site,
//         destination : hospital,
//         travelMode : google.maps.TravelMode.DRIVING
//     };
//     directionsService.route(request, function(response, status) {
//         if (status == google.maps.DirectionsStatus.OK) {
//             directionsDisplay.setDirections(response);
//         }
//     });

//     directionsDisplay.setMap(map); 
   
//   }

//   google.maps.event.addDomListener(window, 'load', initialize);

//   $scope.centerOnMe = function() {
//     if(!$scope.map) {
//       return;
//     }

//     $scope.loading = $ionicLoading.show({
//       content: 'Getting current location...',
//       showBackdrop: false
//     });
//     navigator.geolocation.getCurrentPosition(function(pos) {
//       $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
//       $scope.loading.hide();
//     }, function(error) {
//       alert('Unable to get location: ' + error.message);
//     });
//   };
  
//   $scope.clickTest = function() {
//     alert('Example of infowindow with ng-click')
//   };
  
// });