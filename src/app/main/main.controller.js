(function() {
  'use strict';

  angular
    .module('angularStuff')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, $log) {
    var vm = this;

    vm.name = '';
    $scope.email = '';
    $scope.phone = '';
    $scope.password = '';
    $scope.confirmPassword = '';

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
