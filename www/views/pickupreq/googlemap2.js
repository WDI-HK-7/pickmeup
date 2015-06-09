angular.module('App')

.controller('MapController2', function($scope, $ionicLoading) {

  var url = "http://localhost:3000/"

  $scope.location = {};
  $scope.form = {};

var geocoder;
var map;
var infowindow = new google.maps.InfoWindow();
var marker;
function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(40.730885,-73.997383);
  var mapOptions = {
    zoom: 8,
    center: latlng,
    mapTypeId: 'roadmap'
  }
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

$scope.form.codeLatLng =function() {

      var data = {
      location: {
        locations:$scope.location
      }
    };

    console.log("setting location...");
    console.log(data);

  // var input = document.getElementById('latlng').value;
  // var latlngStr = input.split(',', 2);
  // var lat = parseFloat(latlngStr[0]);
  // var lng = parseFloat(latlngStr[1]);

  var lat = $scope.location.latitude;
  var lng = $scope.location.longitude;


    console.log(lat);
    console.log(lng);

  var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        map.setZoom(11);
        marker = new google.maps.Marker({
            position: latlng,
            map: map
        });
        infowindow.setContent(results[1].formatted_address);
        infowindow.open(map, marker);
      } else {
        alert('No results found');
      }
    } else {
      alert('Geocoder failed due to: ' + status);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize());
  

}

);





// $scope.form.codeLatLng =function() {

//     var data = {
//       location: {
//         locations:$scope.location
//       }
//     };

//     console.log("setting location...");
//     console.log(data);
//     // console.log($scope.location.latitude);

//     // var input = document.getElementById('latlng').value;
//     // var latlngStr = input.split(',', 2);

//     // var lat = parseFloat(latlngStr[0]);
//     // var lng = parseFloat(latlngStr[1]);
    
//     var lat = $scope.location.latitude;
//     var lng = $scope.location.longitude;


//     console.log(lat);
//     console.log(lng);
    
//     console.log("hey"+latlng)
//     console.log("ha"+latLng)

//  var latlng = new google.maps.LatLng(lat, lng);



//   geocoder.geocode({'latLng': latlng}, function(results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//       if (results[1]) {
//         map.setZoom(11);
//         marker = new google.maps.Marker({
//             position: latlng,
//             map: map
//         });
//         infowindow.setContent(results[1].formatted_address);
//         infowindow.open(map, marker);
//       } else {
//         alert('No results found');
//       }
//     } else {
//       alert('Geocoder failed due to: ' + status);
//     }
//   });
// }

// google.maps.event.addDomListener(window, 'load', initialize);