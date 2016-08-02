(function() {

	angular.module('angularStuff').directive('comparePassword', function() {
		return {
			require: 'ngModel',
			scope: {
				otherModelValue: '=comparePassword',
				ngModel: '='
			},
			link: function(scope, elem, attrs, ctrl) {

				var confirmDirty = false;

				function passwordMatch(pwdModel, confirmPwdModel) {
					var matchingPassword = (pwdModel === confirmPwdModel) ? true : false;
					ctrl.$setValidity('confirmPw', matchingPassword);
				}

				elem[0].onblur = function() {
					confirmDirty = (ctrl.$dirty) ? true : false;
					if (confirmDirty) {
						passwordMatch(scope.otherModelValue, ctrl.$modelValue);
						scope.$apply();
					}
				};

				scope.$watch('otherModelValue', function() {
					if (confirmDirty) {
						passwordMatch(scope.otherModelValue, ctrl.$modelValue);	
					}
				});

				scope.$watch('ngModel', function() {
					if (confirmDirty) {
						passwordMatch(scope.otherModelValue, ctrl.$modelValue);	
					}
				});
			}
		};
	});

})();