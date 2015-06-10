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
      zoom: 12,
      center: latlng,
      mapTypeId: 'roadmap'
    }
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }

  $scope.form.codeLatLng =function() {

    // var data = {
    //   location: {
    //     locations:$scope.location
    //   }
    // };

    console.log("setting location...");
    // console.log("testing" + data);

    // below from google maps API demo; not used
    // var input = document.getElementById('latlng').value;
    // var latlngStr = input.split(',', 2);
    // var lat = parseFloat(latlngStr[0]);
    // var lng = parseFloat(latlngStr[1]);

    // manually setting latitude and longitude based on input
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
          console.log(results[1]);
          console.log("The address is "+results[1]['formatted_address']);
        } else {
          alert('No results found');
        }
      } else {
        alert('Geocoder failed due to: ' + status);
      }
    });
  }

  // note from stackoverflow: need to initalize with () .
  google.maps.event.addDomListener(window, 'load', initialize());
  
  }

);
