angular.module('app').controller('blogPostCreateController', function ($scope, $location, blogResource) {

    $scope.publish = () => {
        var blogPost = new blogResource({
            header: $scope.header,
            text: $scope.text
        });
        
        blogPost.$save().then(res => {
            toastr.info("Blog post was created");
            $location.path("/blog")
        });
    }
});