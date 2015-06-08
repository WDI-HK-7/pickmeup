angular.module('App')

.controller('TripsearchCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

  var url = "http://localhost:3000/"



  $scope.getOpenTrips = function(status) {
    $http.get(url + '/posts?status=' + status).success(function(response){
      console.log(response);
      $scope.posts = response;
    

    });
  }

  $scope.getOpenTrips('open');

  $scope.updateStatusToProcessing = function(index) {
    $scope.posts[index].status.content = "processing"
    
    var put_data = {
      post: {
        status: $scope.posts[index].status.content
      }
    }

    $http.put(url + 'posts/' + $scope.posts[index].id, put_data).success(function(response) {
      console.log(response);
    })
  }
}]);