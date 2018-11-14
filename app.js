var app=angular.module("myApp", []);

app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'AI Aid'; 
  $scope.promo = 'Come here for all your advanced AI needs!';
  $scope.products = [
    {
      name: 'Maid',
      modelNumber: '148-VSC',
      functions: 'Cleaning the house',
      miniDrones: 5,
      price: 13000,
      release: new Date('2168', '07', '18'),
      cover: 'https://github.com/0Rose0/Angular-APP/blob/master/APP%20Pics/065e669933bb5ada9298079984a6faec.jpg'
      
      
    },
     {
      name: 'Bodyguard',
      modelNumber: '869-KXY',
      functions: 'Protecting you and your assets',
      miniDrones: 8,
      price: 24000,
      release: new Date('2168', '04', '18'),
      cover: 'https://github.com/0Rose0/Angular-APP/blob/master/APP%20Pics/060e279b9e186fbd1c68929893b5725c.jpg'
     }
    
    
    ]
  
  
}]);

