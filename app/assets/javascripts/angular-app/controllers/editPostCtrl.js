forum.controller('editPostCtrl', ['$scope', '$http', 'Auth', '$location', '$routeParams', function($scope, $http, Auth, $location, $routeParams){
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

  $scope.sendData = function() {
    var postAttrs = { post: {
                          "title": $scope.post.title,
                          "content": $scope.post.content,
                          "user_id": $scope.currentUser.id
                          }
                    };

    $http.put('/api/v1/posts/' + $routeParams.id, postAttrs).then(function(response){
      alert('Post editado');

      $location.path('/');
    });
  };

}]);
