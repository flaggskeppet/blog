angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {

  console.log("hello from angular & app.js")

  $locationProvider.html5Mode(true);
  $routeProvider
    //.when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl' })
    .when('/blog', {
      templateUrl: '/partials/blog/blog-list',
      controller: 'mvBlogListCtrl',
      resolve: function(){console.log("blog route was hit!")}
    })
});

angular.module('app').run(function($rootScope, $location) {});