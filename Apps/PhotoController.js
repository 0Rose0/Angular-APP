app.controller('PhotoController', ['$scope', 'photos', function($scope, photos) {
  photos.success(function(data) {
    $scope.photos = data;
  });
}]);
