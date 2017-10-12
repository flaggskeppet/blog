angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/blog', {
      templateUrl: '/partials/blog/blog-list',
      controller: 'blogListController',
      resolve: function(){console.log("blog route was hit!")}
    })
});

angular.module('app').run(function($rootScope, $location) {});