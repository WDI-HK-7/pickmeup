angular.module('App')

.controller('TracktripCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

  var url = "http://localhost:3000/"

  $scope.getOpenTrips = function(status) {
    $http.get(url + 'authenticated').success(function(response){
      user = response;
      console.log(user)

      $http.get(url + '/users/' + user.id + '/postmanposts?status=' + status).success(function(response){
        console.log(response);
        $scope.posts = response;
      });
    });
  }

  $scope.getOpenTrips('processing');

}]);