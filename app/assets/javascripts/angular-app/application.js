var forum = angular.module('deltaForum', ['ngRoute', 'Devise']);

forum.config(['$routeProvider', '$locationProvider', '$httpProvider', 'AuthProvider', function($routeProvider, $locationProvider, $httpProvider, AuthProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

    $routeProvider

    .when('/', {
        templateUrl : '/assets/angular-app/templates/posts/index.html.hbs',
        controller  : 'indexPostsCtrl'
    })

    .when('/index', {
        templateUrl : '/assets/angular-app/templates/posts/index.html.hbs',
        controller  : 'indexPostsCtrl'
    })

    .when('/post/new', {
        templateUrl : '/assets/angular-app/templates/posts/new.html.hbs',
        controller  : 'newPostCtrl'
    })

    .when('/post/:id/edit', {
        templateUrl : '/assets/angular-app/templates/posts/edit.html.hbs',
        controller  : 'editPostCtrl'
    })

    .when('/post/:id/view', {
        templateUrl : '/assets/angular-app/templates/posts/view.html.hbs',
        controller  : 'viewPostCtrl'
    })

}]);
