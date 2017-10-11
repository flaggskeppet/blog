angular.module('app').controller('mvBlogListCtrl', function($scope, mvBlog) {
    $scope.blogs = mvBlog.query();
  
    $scope.sortOptions = [{value:"title",text: "Sort by Title"},
      {value: "published",text: "Sort by Publish Date"}];
    $scope.sortOrder = $scope.sortOptions[0].value;
  });