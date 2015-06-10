angular.module('App')

.controller('MapCtrl2', function($scope, $ionicLoading) {

    $scope.location = {};
    var marker;
    // var infowindow;

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
            console.log("MY LOCATION! --> "+myLocation);

            $scope.location.address = myLocation['position'];
            console.log($scope.location.address);
            var elem = document.getElementById("mycurloc");
            elem.value = myLocation['position'];
            var input = elem.value;
            console.log("testttt" +input)

            // this is where we convert coordinates into address
            function coordToAdd(input) {
              var latlngStr = input.replace(/\(|\)/g,'');
              console.log("latlngStr now=" + latlngStr)

              latlngStr = latlngStr.split(',', 2);
              console.log(latlngStr);
              var lat = parseFloat(latlngStr[0]);
              var lng = parseFloat(latlngStr[1]);

              console.log(lat);
              console.log(lng);

              var geocoder = new google.maps.Geocoder();
              // infowindow = new google.maps.InfoWindow();

              var latlng = new google.maps.LatLng(lat, lng);
              geocoder.geocode({'latLng': latlng}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                  if (results[1]) {
                    map.setZoom(16);
                    marker = new google.maps.Marker({
                        position: latlng,
                        map: map
                    });
                    // infowindow.setContent(results[1].formatted_address);
                    // infowindow.open(map, marker);
                    console.log(results[1]);
                    console.log("The address is " + results[1]['formatted_address']);
                  } else {
                    alert('No results found');
                  }
                } else {
                  alert('Geocoder failed due to: ' + status);
                }

                elem.value = results[1]['formatted_address'];
              });
            }
            coordToAdd(input);
            
            google.maps.event.addListener(map, 'center_changed', function() {
               // 0.1 seconds after the center of the map has changed,
               // set back the marker position.
               window.setTimeout(function() {
                 var center = map.getCenter();
                 marker.setPosition(center);
               }, 100);
            });

            google.maps.event.addDomListener(window, 'mouseup', function() {
              myLocation.setMap(null);
              marker.setMap(null);
              console.log("this" + map.getCenter());
              var elem = document.getElementById("mycurloc");
              elem.value = map.getCenter();
              newinput = elem.value;

              coordToAdd(newinput);
            }); 

          google.maps.event.addListener(window, 'mousedown', function() {
          });

        });
    $scope.map = map;
  });


  $scope.form = {};

});
