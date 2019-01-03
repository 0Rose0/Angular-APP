app.directive('installApp',function(){
  return{
    restrict: 'E',
    scope:{
      info: '='
    },
  templateUrl:
    'Directives/installApp.html'
  };
});
