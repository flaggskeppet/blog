angular.module('app').controller('blogPostController', function($scope, $routeParams, blogResource) {
  $scope.blogPost = blogResource.get({_id: $routeParams.id});
  });