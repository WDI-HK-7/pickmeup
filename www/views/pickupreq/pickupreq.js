angular.module('App')

.controller('PickupreqCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

  var url = "http://localhost:3000/"

  $scope.form = {};
  $scope.post = {};


  $http.get(url + 'authenticated').success(function(response){
    console.log(response);
  });

  // note: the .pickupreq links to the same in the .html. Doesn't need to have the same name in post controller (eg no need to be .create even tho that's in the controller)
  $scope.form.pickupreq = function(){
    // console.log("making pickup request...");
    var data = {
      post: {// post: $scope.post
        'pulocation': $scope.post.pulocation,
        'packagetype': $scope.post.packagetype,
        'pudate': $scope.post.pudate,
        'putime': $scope.post.putime,
        'destination': $scope.post.destination,
        'delidate': $scope.post.delidate,
        'delitime': $scope.post.delitime,
        'remarks': $scope.post.remarks,
        'status': 'open',
      }
    };


    // var data = {
    //   // post: $scope.post
    //   'post[pulocation]': $scope.post.pulocation,
    //   'post[putime]': $scope.post.putime,
    //   'post[destination]': $scope.post.destination,
    //   'post[delitime]': $scope.post.delitime,
    //   'post[contactnum]': $scope.post.contactnum
    // };


    console.log(data);

    $http.post(url + 'posts', data).success(function(response){
      console.log(response);

    $location.path('/tripsearch');

    });
  };
}]);



// app.controller('PostCtrl',['$scope', '$http', '$location', function($scope, $http, $location) {

//   $scope.form = {};
//   // $scope.user = {};
//   var url = "<%= ENV['URL'] %>" || "http://localhost:3000/";
  
//     $http.get(url + 'posts').success(function(response){
//       console.log(response)

//       $scope.posts = response;

//       $scope.form.create = function(index){
//         // console.log($scope.posts);
//         // $scope.posts[index]

//         var data = {
//           comment: {
//             content: $scope.posts[index].new_comment.content,
//             post_id: $scope.posts[index].id
//           }
//         }

//         $http.post(url + 'comments', data).success(function(response){
//           console.log(response);
//           $scope.posts[index].comments.push(data);
//           $scope.posts[index].new_comment.content ="";
//         });
//       }
//     });
// }]);
