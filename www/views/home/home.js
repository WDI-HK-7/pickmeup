angular.module('App')

.controller('HomeCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

  var url = "http://localhost:3000/"

  console.log("Home");

  $http.get(url + 'authenticated').success(function(response){
    console.log(response);
    $scope.user = response;
  });

}]);