var app=angular.module('single-page-app',['ngRoute']);


app.config(function($routeProvider){


      $routeProvider
          .when('/',{
                templateUrl: 'home.html'
          })
          .when('/contact',{
                templateUrl: 'contact.html'
          });


});


app.controller('cfgController',function($scope){

      $scope.message="Yo peeps!";

});
