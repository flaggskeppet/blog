angular.module('app').factory('mvBlog', function($resource) {
  var BlogResource = $resource('/api/blog_list/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });

  return BlogResource;
});