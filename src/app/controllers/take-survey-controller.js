'use strict';
(function() {
    var surveyEngine = angular.module('surveyEngine');

    surveyEngine.controller('TakeSurveyController', ['$scope', '$routeParams', 'assignmentsService',
        function($scope, $routeParams, assignmentsService) {
            var assignmentId = parseInt($routeParams.surveyId, 10);
            $scope.model = {};
            $scope.model.questions = assignmentsService.getAssignmentById(assignmentId);
            console.log($scope.model);
        }]);
})();