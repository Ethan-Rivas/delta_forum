forum.controller('indexPostsCtrl', ['$scope', '$http', 'Auth', function($scope, $http, Auth){
  $scope.name = "Delta School Forum"

  Auth.currentUser().then(function(user) {
    // User was logged in, or Devise returned
    // previously authenticated session.
    $scope.currentUser = user; // => {id: 1, ect: '...'}
  }, function(error) {
    // unauthenticated error
    console.log('Not connected');
  });

  $http.get('/api/v1/posts.json').then(function(response){
    $scope.posts = response.data;
  });
}]);
