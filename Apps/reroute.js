var app2 = angular.module('GalleryApp', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/',{
  controller: 'MainController',
    //^^ this is messing things up, get rid of? change back to Home Controller?
   templateUrl: 'index.html'
  })
  .when('/Angular-APP//photos/:id',{
    controller: 'PhotoController',
    templateUrl: 'views/home.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
