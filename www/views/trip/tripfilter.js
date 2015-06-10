angular.module('App')

.controller('TripfilterCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

  var url = "https://wdi-pickmeup.herokuapp.com/" || "http://localhost:3000/";

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