angular
  .module("main-app")
  .controller("LoginController", LoginController);

LoginController.$inject = ['$scope', '$state', '$location', '$http'];
function LoginController($scope, $state, $location, $http) {
  $scope.login = function(form, user) {
    $scope.focusEmail = false;
    $scope.focusPassword = false;
    var url = 'http://sandbox.urbaner.com/api/client/authenticate';

    $http({
      method: "POST",
      url: url,
      data: user
    })
    .then(function(response) {
      if (response.status == 200 && response.data.status === "success") {
        $state.go('welcome');
      } else {
        console.log('error');
      }
    }, function(error) {
      console.log(error);
    });
  }
}