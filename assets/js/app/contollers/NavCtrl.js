BloggyApp.controller('NavCtrl',['$scope','$rootScope','AlertService','$modal','UserService','$location','$http',function($scope,$rootScope,AlertService,$modal,UserService,$location,$http){
  // console.log('nav controller loaded')

  $scope.UserService = UserService;

  $scope.$watchCollection('UserService',function(){
    $scope.currentUser = UserService.currentUser;
  })

  $scope.taco = 'tacoBell';
  $scope.showLogin = function(){
    $modal.open({
      templateUrl: '/views/auth/loginModal.html',
      controller: 'LoginModalCtrl'
    })
  }

  $scope.userLogOut = function(){
    UserService.logout(function(err){
      //doing nothing...
    AlertService.add('danger','You are now logged out');
    });
    // $location.path('/');
  }




}]);