(function () {
  'use strict';

  angular.module('exceptionless.date-filter', [
    'exceptionless.date-picker',
    'exceptionless.date-range-parser',
    'exceptionless.refresh',

    // Custom dialog dependencies
    'ui.bootstrap',
    'dialogs.main',
    'dialogs.default-translations'
  ]);
}());
