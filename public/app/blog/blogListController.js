angular.module('app').controller('blogListController', function($scope, blogResource) {
    $scope.blogs = blogResource.query();

    $scope.sortOptions = [{value:"title",text: "Sort by Title"},
      {value: "published",text: "Sort by Publish Date"}];
    $scope.sortOrder = $scope.sortOptions[0].value;
  });