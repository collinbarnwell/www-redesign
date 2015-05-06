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

    $scope.modalOpen = false;

    $scope.openModal = function() {
        this.modalOpen = true;
    };

    $scope.closeModal = function() {
        this.modalOpen = false;
    };

    // $scope.modalOpen = function() {
    //     return this.modalOpen;
    // };

});
