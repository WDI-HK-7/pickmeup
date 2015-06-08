angular.module('App')

.controller('SignUpCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

  var url = "http://localhost:3000/"

  $scope.user = {};
  $scope.form = {};

  $scope.form.signup = function(){
    console.log("signing up...");

    var data = {
      user: {
        users:$scope.user
        // 'username': $scope.user.username,
        // 'contactnum': $scope.user.contactnum,
        // 'email': $scope.user.email,
        // 'password': $scope.user.password,
        // 'passwordConfirmation': $scope.user.passwordConfirmation,
      }
    };

    console.log(data);

    $http.post(url + 'users', data).success(function(response){
      console.log(response);
//{withCredentials: true},


    $location.path('/login');
    });
  };

}]);


