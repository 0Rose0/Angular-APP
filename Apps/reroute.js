var app2 = angular.module('GalleryApp', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    controller: 'MainController',
    templateUrl: 'index.html'
  })
  .when('/home/',{
    controller: 'HomeController',
    templateUrl: 'views/home.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
