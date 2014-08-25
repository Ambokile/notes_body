
var app_1 =  angular.module('home', ['ionic'])

app_1.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'home.html',
   // controller: 'HomeCtrl'
  })
  .state('register', {
    url: '/register',
    templateUrl: 'register.html',
   // controller: 'HomeCtrl'
  })
  
  $urlRouterProvider.otherwise("/");

})
app_1.controller('HomeCtrl', function($scope) {
  console.log('HomeCtrl');
});