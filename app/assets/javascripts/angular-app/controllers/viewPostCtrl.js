forum.controller('viewPostCtrl', ['$scope', '$http', 'Auth', '$routeParams', '$location', '$route', function($scope, $http, Auth, $routeParams, $location, $route){
  Auth.currentUser().then(function(user) {
    // User was logged in, or Devise returned
    // previously authenticated session.
    $scope.currentUser = user; // => {id: 1, ect: '...'}
  }, function(error) {
    // unauthenticated error
    console.log('Not connected');
  });

  // Get posts
  $http.get('/api/v1/posts/' + $routeParams.id).then(function(response) {
    $scope.post = response.data;
  });

  // Delete post
  $scope.deletePost = function() {
    if(confirm('Este post se eliminará permanentemente, esta seguro?')){
      $http.delete('/api/v1/posts/' + $routeParams.id).then(function(response) {
        alert('Post: ' + $scope.post.title + ' eliminado');

        $location.path('/');
      });
    }
  }

  // Send comment to post
  $scope.comment = {};

  $scope.sendComment = function(user, post) {
    var commentAttrs = { comment: {
                                  "user_id": user.id,
                                  "post_id": post.id,
                                  "content": $scope.comment.content
                       }
    };

    if(confirm('Enviar comentario?')) {
      // Logic
      $http.post('/api/v1/posts/' + $routeParams.id + '/comments', commentAttrs).then(function(response) {
        alert('Comentario creado');

        $route.reload();
      });
    }
  }

  $scope.editComment = function(user, post, comment) {
    var commentAttrs = { comment: {
                                  "user_id": user.id,
                                  "post_id": post.id,
                                  "content": comment.content
                       }
    };

    if(confirm('Editar comentario?')) {
      // Logic
      $http.put('/api/v1/posts/' + $routeParams.id + '/comments/' + comment.id, commentAttrs).then(function(response) {
        alert('Comentario editado');

        $route.reload();
      });
    }
  }

  // Delete post
  $scope.deleteComment = function(comment) {
    if(confirm('Se eliminará este comentario permanentemente, esta seguro?')){
      $http.delete('/api/v1/posts/' + $routeParams.id + '/comments/' + comment.id).then(function(response) {
        alert('Comentario eliminado');

        $route.reload();
      });
    }
  }
}]);
