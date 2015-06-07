angular.module('App')

.controller('LandingCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

  var url = "http://localhost:3000/"

  $scope.goToLogin = function() {
    $location.path('/login');
  }

}]);


