var app2 = angular.module('GalleryApp', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/test',{
    controller: 'HomeController',
    templateUrl: 'views/home.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
