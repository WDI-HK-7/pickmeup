angular.module('App')

.controller('LandingCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

  var url = "https://wdi-pickmeup.herokuapp.com/" || "http://localhost:3000/";

  $http.get(url + 'authenticated').success(function(response){
    console.log(response);

    if (response != null) {
      $location.path('/home');
    }

  });

}]);


