angular.module('App')

.controller('LoginCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

  var url = "http://localhost:3000/"

  $scope.user = {};
  $scope.form = {};

  $scope.form.login = function(){
    console.log("logging in...");

    var data = {
      user: $scope.user
    };

    console.log(data);

    $http.post(url + 'users/sign_in', data).success(function(response){
      console.log(response);

    $location.path('/home');

    });
  };


}]);


// for rails-instagram:

// angular.module('App')

// .controller('LoginCtrl', ['$scope', '$http', function($scope, $http){

//   var url = "<%= ENV['URL'] %>" || "http://localhost:3000/"

//   $scope.user = {};
//   $scope.form = {};

//   $scope.form.login = function(){
//     console.log("logging in...");

//     var data = {
//       user: $scope.user
//     };

//     console.log(data);

//     $http.post(url + 'users/sign_in', data).success(function(response){
//       console.log(response);
//     });
//   };
// }]);


