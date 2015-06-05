
angular.module('App')

.controller('LogoutCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

  var url = "http://localhost:3000/"

  $scope.user = {};
  $scope.form = {};

  $scope.form.logout = function() {
  
    $http.delete(url + 'users/sign_out').success(function(response){
      console.log(response)
    })

  };

}]);

