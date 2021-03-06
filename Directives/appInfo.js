app.directive('appInfo', function() { 
  return { 
    restrict: 'E', //means we're making a new html element
    scope: { //scope specifies that we will pass information into this directive through an attribute named info. The = tells the directive to look for an attribute named info in the <app-info> element, like this:
      info: '=' 
    }, 
    templateUrl: 'Directives/appInfo.html' //templateUrl specifies the HTML to use in order to display the data in scope.info. Here we use the HTML in js/directives/appInfo.html.
  //look up if can have multiple templateUrl's to properly display everything
  
  }; 
 
});
