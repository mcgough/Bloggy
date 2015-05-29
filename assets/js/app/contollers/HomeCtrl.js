BloggyApp.controller('HomeCtrl',['$scope','$rootScope','Post','AlertService','UserService',function($scope,$rootScope,Post,AlertService,UserService){

  // AlertService.add('warning, this is an error')
  // AlertService.add('success, this is some info');
  $scope.currentUser = UserService.currentUser;

  $scope.$watchCollection('UserService',function(){
    console.log('a change occurred with the user')
    $scope.currentUser = UserService.currentUser;
  })

  $rootScope.taco = 'This is the value of taco';

  console.log(AlertService)
  AlertService.clear();

  console.log('HomeCtrl loaded')

  $scope.reloadPosts = function(){
    Post.query(function(data){
      $scope.posts = data;
      console.log(data)
      console.log($scope.currentUser.id)
    })

  }

  $scope.showPost = function(postId){
    Post.get({id:postId},function(data){
      console.log(data)
    })
  }

  $scope.deletePost = function(postId){
    Post.delete({id:postId},function(data){
      console.log(data);
      AlertService.add('info','The post was deleted')
      $scope.reloadPosts();
    })
  }
  $scope.posts = [];

  $scope.reloadPosts();

  // $http.get('/api/post').success(function(data){
  //   console.log(data);
  //   $scope.posts = data;
  // })

}])