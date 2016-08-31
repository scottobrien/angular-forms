(function () {
  'use strict';
  angular.module('angularStuff')
    .directive('alphanumericUnderscore', ['$log', function ($log) {
      
      return {
        restrict: 'AE',
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {

          var testExp = /[^A-Za-z0-9\_]/g;

          function memberIdCheck() {
            if (ctrl.$viewValue.search(testExp) === -1) {
              return true;
            }
            return false;
          }

          elem[0].onblur = function () {
            ctrl.$validators.memberIdSpecialChar = function () {
              return memberIdCheck();
            };
          };

        } 
      };

    }]);    
})();