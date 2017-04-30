forum.controller('viewPostCtrl', ['$scope', '$http', 'Auth', '$routeParams', '$location', function($scope, $http, Auth, $routeParams, $location){
  Auth.currentUser().then(function(user) {
    // User was logged in, or Devise returned
    // previously authenticated session.
    $scope.currentUser = user; // => {id: 1, ect: '...'}
  }, function(error) {
    // unauthenticated error
    console.log('Not connected');
  });

  $http.get('/api/v1/posts/' + $routeParams.id).then(function(response) {
    $scope.post = response.data;
  });

  $scope.deletePost = function() {
    if(confirm('Este post se eliminará permanentemente, esta seguro?')){
      $http.delete('/api/v1/posts/' + $routeParams.id).then(function(response) {
        alert('Post: ' + $scope.post.title + ' eliminado');

        $location.path('/');
      });
    }
  }
}]);
