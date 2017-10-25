angular.module('app').controller('blogPostEditController', function ($scope, $routeParams, $location, blogResource) {
    $scope.blogPost = blogResource.get({_id: $routeParams.id})
    .$promise.then(function(res){
            $scope.header = res.header;
            $scope.text = res.text;
            console.log(res.header)
        }
    )
    
    $scope.publish = () => {
        var blogPost = new blogResource({
            header: $scope.header,
            text: $scope.text,
            _id: $routeParams.id
        });
        
        blogResource.update({_id: $routeParams.id}, blogPost)
        .$promise.then(res => {
            toastr.info("Blog post was updated");
            $location.path("/blog_post/"+ $routeParams.id)
        });
    }
});