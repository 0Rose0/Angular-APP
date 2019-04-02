var app2 = angular.module('GalleryApp', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
//  .when('/',{
//   controller: 'MainController',
    //^^ this is messing things up, get rid of? change back to Home Controller?
  //  templateUrl: 'index.html'
 // })
  .when('/home/',{
    controller: 'HomeController',
    templateUrl: 'views/home.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
