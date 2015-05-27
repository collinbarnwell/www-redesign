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

    $scope.projects = [
        { name: "WildHacks", image: "../images/wildhacks-logo.png", color: "#f38288" },
        { name: "NUVC", image: "../images/nuvc.png", color: "#ef5961" },
        { name: "EPIC Labs", image: "../images/epic-labs-white.png", color: "#b0232b" },
        { name: "Project Pitch", image: "../images/project-pitch-white.png", color: "#76181d" },
        // { name: "", image: "../images/epic-labs-white.png", color: "#3b0c0e" }
    ];

    $scope.modalOpen = false;
    $scope.projNum = 3;

    $scope.currentProjectClass = function(project) {
        if (project.name == $scope.projects[$scope.projNum].name)
            return 'current';
        return '';
    }

    $scope.isCurrent = function(project) {
        if (project.name == $scope.projects[$scope.projNum].name)
            return true;
        return false;
    }

    $scope.displayMinus = function(projName) {
        if ($scope.projNum > 0)
            $scope.projNum -= 1;
    };

    $scope.displayPlus = function() {
        if ($scope.projNum < $scope.projects.length)
            $scope.projNum += 1;
    };

    $scope.openModal = function() {
        $scope.modalOpen = true;
    };

    $scope.closeModal = function() {
        $scope.modalOpen = false;
    };
});
