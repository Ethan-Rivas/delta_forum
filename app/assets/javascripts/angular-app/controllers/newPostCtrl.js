forum.controller('newPostCtrl', ['$scope', '$http', 'Auth', '$location', function($scope, $http, Auth, $location){
  Auth.currentUser().then(function(user) {
    // User was logged in, or Devise returned
    // previously authenticated session.
    $scope.currentUser = user; // => {id: 1, ect: '...'}
  }, function(error) {
    // unauthenticated error
    console.log('Not connected');
  });

  $scope.post = {};

  $scope.sendData = function() {
    if($scope.currentUser != null) {
      var postAttrs = { post: {
                            "title": $scope.post.title,
                            "content": $scope.post.content,
                            "user_id": $scope.currentUser.id
                            }
                      };

      $http.post('/api/v1/posts', postAttrs).then(function(response){
        alert('Post creado');

        $location.path('/');
      });
    } else {
      alert("No ha iniciado sesión. Redireccionando.");

      $location.path('/users/sign_in');
    }
  };

}]);
