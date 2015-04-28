'use strict';

/**
 * @ngdoc function
 * @name epicWwwApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the epicWwwApp
 */
angular.module('epicWwwApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
