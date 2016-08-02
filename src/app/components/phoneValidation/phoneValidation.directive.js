(function() {

  angular.module('angularStuff').directive('phoneFormat', function() {
    return {
      require: 'ngModel',
      link: function(scope, elem, attrs, ctrl) {

        var phoneModel = attrs.ngModel;
        var numExp = /[a-z]/i;

        function getResult(number) {
          var numberLength = number.replace(/[^0-9]/g,"").length;
          var lengthResult = (numberLength >= 10) ? true : false;
          return lengthResult;
        }

        function formatPhoneNumber(num) {
          var s2 = (""+num).replace(/\D/g, '');
          var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
          return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
        }

        elem[0].onblur = function() {
          ctrl.$setValidity('minLength', getResult(scope[attrs.ngModel]));
          scope.$apply();
        };

        scope.$watch(phoneModel, function(newValue, oldValue) {
          if (numExp.test(newValue)) {
            scope[attrs.ngModel] = oldValue;
            return;
          }
          if (oldValue === angular.isUndefined || newValue === angular.isUndefined) {
            scope[attrs.ngModel] = '';
            return;
          }
          if (formatPhoneNumber(newValue)) {
            scope[attrs.ngModel] = formatPhoneNumber(newValue);
            ctrl.$setValidity('minLength', getResult(scope[attrs.ngModel]));
            return;
          }
        });
      }
    };
  });

})();