
var app_1 =  angular.module('home', ['ionic'])

app_1.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'home.html',
   // controller: 'HomeCtrl'
  })
  .state('info', {
    url: '/info',
    templateUrl: 'info.html',
   // controller: 'HomeCtrl'
  })
  
  $urlRouterProvider.otherwise("/");

})
app_1.controller('HomeCtrl', function($scope) {
  console.log('HomeCtrl');
});