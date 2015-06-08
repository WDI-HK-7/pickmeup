angular.module('App')

.controller('SignUpCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

  var url = "http://localhost:3000/"

  $scope.user = {};
  $scope.form = {};

  $scope.form.signup = function(){
    console.log("signing up...");

    var data = {
      user: $scope.user
    };

    console.log(data);

    $http.post(url + 'users', {withCredentials: true}, data).success(function(response){
      console.log(response);

    $location.path('/login');
    });
  };

}]);


