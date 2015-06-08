angular.module('App')

.controller('ClosedreqCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

  var url = "http://localhost:3000/"



  $scope.getOpenTrips = function(status) {
    $http.get(url + '/posts?status=' + status).success(function(response){
      console.log(response);
      $scope.posts = response;
    

    });
  }

  $scope.getOpenTrips('closed');

}]);