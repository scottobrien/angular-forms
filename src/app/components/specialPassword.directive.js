(function () {
  'use strict';
  angular.module('angularStuff')
    .directive('specialPassword', ['$log', function ($log) {
      
      return {
        restrict: 'AE',
        require: '?ngModel',
        link: function (scope, elem, attr, ctrl) {

          var regexSpecial = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/;

          elem[0].onblur = function () {
            ctrl.$validators.specialPass = function () {
              return regexSpecial.test(ctrl.$viewValue);
            }; 
          };
          
        }
      };

    }]);
})();