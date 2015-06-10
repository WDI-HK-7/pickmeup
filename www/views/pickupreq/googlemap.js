angular.module('App')

//below for google maps. Document suggested this controller added as part of app.js but we are having this in this directory to keep consistent with other files

.controller('MapController', function($scope, $ionicLoading) {
    $scope.location = {};

    google.maps.event.addDomListener(window, 'dblclick', function() {
        // shows IFC as default starting spot:
        var myLatlng = new google.maps.LatLng(22.284900, 114.1589169);

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
            // console.log(myLocation['position']);
            // console.log("Your current coordinates are " + myLocation['position']);
            $scope.location.address = myLocation['position'];
            console.log($scope.location.address);
            var elem = document.getElementById("mycurloc");
            elem.value = myLocation['position'];

            // google.maps.event.addDomListener(window, 'click', function() {
            // }); 
    });
    $scope.map = map;
  });

});
