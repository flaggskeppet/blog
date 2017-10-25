angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/blog', {
      templateUrl: '/partials/blog/blog-list',
      controller: 'blogListController'
    })
    .when('/blog_post/:id', {
      templateUrl: '/partials/blog/blog-post',
      controller: 'blogPostController',
    })
    .when('/create-blog-post', {
      templateUrl: '/partials/blog/create-blog-post',
      controller: 'blogPostCreateController',
      resolve: function(){console.log("permissions check here later")}
    })
    .when('/edit-blog-post/:id', {
      templateUrl: '/partials/blog/create-blog-post',
      controller: 'blogPostEditController',
      resolve: function(){console.log("permissions check here later")}
    })
});

angular.module('app').run(function($rootScope, $location) {});