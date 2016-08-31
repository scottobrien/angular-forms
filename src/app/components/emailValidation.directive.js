(function() {
  'use strict';
  angular.module('angularStuff').directive('emailValidation', function($log) {
    return {
      require: '?ngModel',
      link: function(scope, elem, attrs, ctrl) {
        var emailExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        // only apply the validator if ngModel is present and Angular has added the email validator

        if (ctrl && ctrl.$validators.email) {
          // this will overwrite the default Angular email validator
          ctrl.$validators.email = function(modelValue) {
            return emailExp.test(modelValue);
          };
        }
        
      }
    };
  });
})();