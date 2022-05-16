(function () {
  try {
    return angular.module('bonitasoft.ui.widgets');
  } catch(e) {
    return angular.module('bonitasoft.ui.widgets', []);
  }
})().directive('customNacimientoLegalEdad', function() {
    return {
      controllerAs: 'ctrl',
      controller: function PbDatePickerCtrl($scope, $log, widgetNameFactory, $element, $locale, $bsDatepicker) {

  'use strict';

  this.name = widgetNameFactory.getName('pbDatepicker');
  this.firstDayOfWeek = ($locale && $locale.DATETIME_FORMATS && $locale.DATETIME_FORMATS.FIRSTDAYOFWEEK) || 0;

  $bsDatepicker.defaults.keyboard = false;

  

  this.openDatePicker = function () {
    $element.find('input')[0].focus();
  };


  if (!$scope.properties.isBound('value')) {
    $log.error('the pbDatepicker property named "value" need to be bound to a variable');
  }


}
,
      template: '<div ng-class="{\n    \'form-horizontal\': properties.labelPosition === \'left\' && !properties.labelHidden,\n    \'row\': properties.labelPosition === \'top\' && !properties.labelHidden || properties.labelHidden\n    }">\n    <div class="form-group">\n        <label\n            ng-if="!properties.labelHidden"\n            ng-class="{ \'control-label--required\': properties.required }"\n            class="control-label col-xs-{{ !properties.labelHidden && properties.labelPosition === \'left\' ? properties.labelWidth : 12 }}"\n            ng-bind-html="properties.label | uiTranslate">\n        </label>\n\n        <div\n            class="col-xs-{{ 12 - (!properties.labelHidden && properties.labelPosition === \'left\' ? properties.labelWidth : 0) }}">\n            <p class="input-group">\n                <input class="form-control"\n                       name="{{ctrl.name}}"\n                       type="text"\n                       placeholder="{{properties.placeholder | uiTranslate}}"\n                       autocomplete="off"\n                       ng-model="properties.value"\n                       ng-readonly="properties.readOnly"\n                       ng-required="properties.required"\n                       data-container="body"\n                       data-autoclose="1"\n                       data-timezone="UTC"\n                       date-format="{{properties.dateFormat | uiTranslate}}"\n                       data-trigger="focus"\n                       data-start-week="{{ctrl.firstDayOfWeek}}"\n                       data-max-date="today" \n                       bs-datepicker>\n\n                <span class="input-group-btn">\n                    \n                    <button type="button"\n                            class="btn btn-default calendar\n                               {{$form[ctrl.name].$dirty && ($form[ctrl.name].$error.date || $form[ctrl.name].$error.parse ||\n                               (properties.required && $form[ctrl.name].$error.required)) ? \'btn-invalid\':\'\'}}"\n                            ng-click="ctrl.openDatePicker()"\n                            ng-disabled="properties.readOnly">\n                        <i class="glyphicon glyphicon-calendar"></i>\n                    </button>\n                </span>\n            </p>\n           <div class="error-msgs" ng-messages="$form.customInput.$error" ng-if="$form.customInput.$dirty">\n                    <div ng-message="emailValidator">Invalid Email ID provided</div>\n                    <div ng-message="ageValidator">Persons aged less than 18 years not eligible</div>\n                    <div ng-message="panValidator">Invalid PAN no entered</div>\n                    <div ng-message="aadhaarValidator">Invalid Aadhaar No entered</div>\n                    <div ng-message="nameValidator">Names cannot have special/numeric characters</div>\n                </div>\n        </div>\n    </div>\n</div>\n'
    };
  });
