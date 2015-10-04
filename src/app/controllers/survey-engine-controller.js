'use strict';
(function() {
    var surveyEngine = angular.module('surveyEngine');

    surveyEngine.controller('SurveyEngineController', ['$scope', 'sampleDataService', 'assignmentsService',
        function($scope, sampleDataService, assignmentsService) {
            $scope.model = sampleDataService.getSampleData();
            assignmentsService.setAssignments($scope.model.assignments);
        }]);
})();