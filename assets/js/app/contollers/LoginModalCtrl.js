BloggyApp.controller('LoginModalCtrl',['$scope','$resource','UserService','AlertService','$modalInstance',function($scope,$resource,UserService,AlertService,$modalInstance){

  $scope.UserService = UserService;

  $scope.$watchCollection('UserService',function(){
    console.log('a change occurred with the user')
    $scope.currentUser = UserService.currentUser;
  })

  $scope.userLogin = function(){
    console.log($scope.user.email)
    UserService.login($scope.user.email,$scope.user.password,function(err,data){
      if(err){
        console.log(err)
        alert('something horrible happened')
      }else if(data && data.result){
        console.log(data);
        AlertService.add('success', data.user.firstName + ', you are now logged in')
        $modalInstance.close();
      }else{
        alert('unable to login')
      }
      // console.log(user)
    })

  }
}]);