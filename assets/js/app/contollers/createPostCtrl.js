BloggyApp.controller('createPostCtrl',['$scope','$resource','UserService',function($scope,$resource,UserService){
  var Post = $resource('/api/post');
  $scope.currentUser = UserService.currentUser;
  $scope.createPost = function(){
    var post = new Post();
    post.title = $scope.post.title;
    post.body = $scope.post.body;
    post.userId = $scope.currentUser.id
    post.$save(function(){
      console.log('post saved');
      $scope.post.title = "";
      $scope.post.body = "";
    })
  }
}]);