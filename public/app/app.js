angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/blog', {
      templateUrl: '/partials/blog/blog-list',
      controller: 'blogListController',
      resolve: function(){}
    })
    .when('/blog_post/:id', {
      templateUrl: '/partials/blog/blog-post',
      controller: 'blogPostController',
      resolve: function(){console.log("blog-post")}
    })
});

angular.module('app').run(function($rootScope, $location) {});