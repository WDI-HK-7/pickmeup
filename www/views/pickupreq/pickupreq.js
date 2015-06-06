angular.module('App')

.controller('PickupreqCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

  var url = "http://localhost:3000/"

  $scope.post = {};
  $scope.form = {};

  $scope.form.pickupreq = function(){
    console.log("making pickup request...");

    var data = {
      // post: $scope.post
      'post[pulocation]': $scope.post.pulocation,
      'post[putime]': $scope.post.putime,
      'post[destination]': $scope.post.destination,
      'post[delitime]': $scope.post.delitime,
      'post[contactnum]': $scope.post.contactnum
    };

    console.log(data);

    $http.post(url + 'posts', data).success(function(response){
      console.log(response);

    // $location.path('/home');

    });
  };


}]);


  // $scope.form = {};
  // $scope.post = {};
  // $scope.picture= {};

  // var url = "<%= ENV['URL'] %>" || "http://localhost:3000/";
  
  // $scope.form.create = function() {
  //   var data = {
  //     'post[title]': $scope.post.title,
  //     'post[content]': $scope.post.content,
  //     'post[category]': $scope.post.category
  //   };
  //   