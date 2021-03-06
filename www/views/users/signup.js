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

    $http.post(url + 'users', data).success(function(response){
      console.log(response);

      $http.post(url + 'users/sign_in', data).success(function(response){
        console.log(response);

        $location.path('/home');

      });

    });
  };

}]);


