app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'AI Aid'; 
  $scope.promo = 'Come here for all your advanced AI needs!';
  $scope.products = [
    {
      name: 'Maid';
      modelNumber: '148-VSC';
      functions: 'Cleaning the house';
      miniDrones: 5;
      price: 13000;
      
    },
     {
      name: 'Bodyguard';
      modelNumber: '869-KXY';
      functions: 'Protecting you and your assets';
      miniDrones: 8;
      price: 24000;
     }
    
    
    ]
  
  
}]);
