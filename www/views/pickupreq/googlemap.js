angular.module('App')

//below for google maps. Document suggested this controller added as part of app.js but we are having this in this directory to keep consistent with other files

.controller('MapController', function($scope, $ionicLoading) {

    google.maps.event.addDomListener(window, 'dblclick', function() {
        // shows Victoria Harbour as default:
        var myLatlng = new google.maps.LatLng(22.28878, 114.16975);
        // shows Tokyo:
        // var myLatlng = new google.maps.LatLng(35.313038, 139.786068);
        // shows LA:
        // var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                title: "My Location"
            });
            // console.log(myLocation);
            console.log(myLocation['position']);
            console.log("Your current coordinates are "+myLocation['position']);

            google.maps.event.addDomListener(window, 'click', function() {
              var elem = document.getElementById("mycurloc");
              elem.value = myLocation['position'];
            }); 
    });
    $scope.map = map;
  });

});
