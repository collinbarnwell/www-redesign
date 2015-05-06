'use strict';

/**
 * @ngdoc function
 * @name epicWwwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the epicWwwApp
 */
angular.module('epicWwwApp')
.controller('ProjectsCtrl', function ($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    console.log('aiaiailmao')

    this.modalOpen = false;

    $scope.openModal = function() {
        this.modalOpen = true;
    };

    $scope.modalOpen = function() {
        return this.modalOpen;
    };
});
