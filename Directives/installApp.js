app.directive('installApp',function(){
  return{
    restrict: 'E',
    scope:{
      info: '='
    },
  templateUrl:
    'js/directives/installApp.html'
  };
});
