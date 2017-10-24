angular.module('app').controller('blogPostEditController', function ($scope, $location, blogResource) {

    $scope.publish = () => {
        var blogPost = new blogResource({
            header: $scope.header,
            text: $scope.text
        });
        
        blogPost.$save().then(res => {
            toastr.info("Blog post was updated");
            $location.path("/blog")
        });
    }
});