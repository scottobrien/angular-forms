(function() {
  'use strict';

  angular
    .module('angularStuff')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $log) {
    var vm = this;

    vm.name = '';
    vm.memberId = '';
    $scope.email = '';
    $scope.phone = '';
    $scope.password = '';
    $scope.confirmPassword = '';
    $scope.specialCharPassword = '';

    vm.isInvalid = false;

    vm.sendInit = function() {
      $log.debug($scope.myForm);
      if ($scope.myForm.$invalid) {
        vm.isInvalid = $scope.myForm.$invalid;
        return;
      }
      vm.isInvalid = false;
    };
  }
})();
