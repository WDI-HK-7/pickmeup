angular.module('App')

.controller('ClosedreqCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

  var url = "https://wdi-pickmeup.herokuapp.com/" || "http://localhost:3000/";

  $scope.getOpenTrips = function(status) {
    $http.get(url + 'authenticated').success(function(response){
      user = response;

      $http.get(url + '/users/' + user.id + '/posts?status=' + status).success(function(response){
        console.log(response);
        $scope.posts = response;
      });
    });
  }

  $scope.getOpenTrips('closed');

}]);