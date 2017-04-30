forum.directive("owner", function() {
  return {
    template: '<ng-include src="getTemplateUrl()"/>',
    restrict: 'E',
    scope: {
      allowed: "@",
      denied: "@",
      user: "@",
      post: "@"
    },
    controller: function($scope) {
      //function used on the ng-include to resolve the template
      $scope.getTemplateUrl = function() {
        //basic handling
        if ($scope.user == $scope.post) {
          return $scope.allowed;
        } else {
          return $scope.denied;
        }
      }
    }
  };
});
