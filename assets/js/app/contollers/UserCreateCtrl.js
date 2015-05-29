BloggyApp.controller('UserCreateCtrl',['$scope','$resource',function($scope,$resource){
  console.log('user ctrl connected')
  var User = $resource('/api/user/:id');
  $scope.userCreate = function(){
    var user = new User();
    user.firstName = $scope.user.firstName;
    user.lastName = $scope.user.lastName;
    user.email = $scope.user.email;
    user.password = $scope.user.password;
    user.$save(function(){
      $scope.firstName = '';
      $scope.lastName = '';
      $scope.email = '';
      $scope.password = '';
    });
  }

}])