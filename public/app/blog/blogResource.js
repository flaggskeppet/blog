angular.module('app').factory('blogResource', function($resource) {
  var BlogResource = $resource('/api/blog_post/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });

  return BlogResource;
});