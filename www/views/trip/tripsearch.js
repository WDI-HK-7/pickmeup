angular.module('App')

.controller('TripsearchCtrl', ['$scope', '$http', '$location', '$ionicModal', function($scope, $http, $location, $ionicModal){

  var url = "http://localhost:3000/"


// Get All Trips
  $scope.getOpenTrips = function(status) {
    $http.get(url + '/posts?status=' + status).success(function(response){
      console.log(response);
      $scope.posts = response;
    });
  }

  $scope.getOpenTrips('open');

// Ionic Modal Setup
  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  
// Update Status To Processing
  $scope.updateStatusToProcessing = function(index) {    
    var patch_processing_data = {
      post: {
        status: "processing"
      }
    }

    $http.patch(url + 'posts/' + $scope.posts[index].id, patch_processing_data).success(function(response) {
      console.log(response);
      $scope.modal.show();
    })
  }

// Update Status Back To Open
  $scope.cancelOrder = function(index) {
    $scope.modal.hide();
    
    var patch_open_data = {
      post: {
        status: "open"
      }
    }

    $http.patch(url + 'posts/' + $scope.posts[index].id, patch_open_data).success(function(response) {
      console.log(response);
    })

  }
}]);