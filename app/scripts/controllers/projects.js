'use strict';

/**
 * @ngdoc function
 * @name epicWwwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the epicWwwApp
 */
angular.module('epicWwwApp', [])
  .controller('ProjectsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.modalOpen = false;

    this.openModal = function() {
      this.modalOpen = true;
    };

    this.modalOpen = function() {
      return this.modalOpen;
    };


  });
