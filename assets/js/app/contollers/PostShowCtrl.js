BloggyApp.controller('PostShowCtrl',['$scope','$rootScope','Post','AlertService','$routeParams','PostComment','UserService',function($scope,$rootScope,Post,AlertService,$routeParams,PostComment,UserService){
  console.log($routeParams.id)

  $scope.currentUser = UserService.currentUser;

  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
    console.log('changes occurred with currentUser')
  })



  Post.get({id:$routeParams.id},function(data){
    $scope.post = data;
  })

  $scope.addComment = function(){
    // alert('add a comment: ' + $scope.commentText)
    var comment = new PostComment();
    comment.body = $scope.commentText;
    comment.$save({postId:$scope.post.id},function(data){
      // Post.get({id:$routeParams.id},function(data){
      //   $scope.post = data;
      // })
    AlertService.add('success','Comment was added')
    $scope.post = data;
    $scope.commentText = "";
    })
  }



}])