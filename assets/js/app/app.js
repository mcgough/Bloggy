var BloggyApp = angular.module('BloggyApp',['ngRoute','ngResource','ui.bootstrap']);

BloggyApp.run(['$rootScope','AlertService','UserService',function($rootScope,AlertService,UserService){
  UserService.check(function(err,data){
    console.log('check!!!!',data,err)
  })
  $rootScope.$on('$routeChangeStart',function(event,next,current){
    // console.log('change',event,next,current)
    AlertService.clear();
  })
}])


BloggyApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/',{
    templateUrl:'/views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/about',{
    templateUrl:'/views/about.html',
    controller: 'StaticCtrl'
  })
  .when('/post',{
    templateUrl: '/views/createPost.html',
    controller: 'createPostCtrl'
  })
  .when('/post/:id',{
    templateUrl: '/views/show.html',
    controller: 'PostShowCtrl'
  })
  .when('/signup',{
    templateUrl: '/views/signup.html',
    controller: 'UserCreateCtrl'
  })
  .otherwise({
    templateUrl:'/views/404.html'
  })

}])


