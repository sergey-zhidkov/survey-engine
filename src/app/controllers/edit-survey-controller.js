'use strict';
(function() {
    var surveyEngine = angular.module('surveyEngine');

    surveyEngine.controller('EditSurveyController', ['$scope', function($scope) {
        $scope.model = {};
        $scope.addQuestion = function() {
            console.log(arguments);
        };
    }]);
})();