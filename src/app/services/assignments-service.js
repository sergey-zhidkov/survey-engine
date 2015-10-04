'use strict';
(function() {
    var surveyEngine = angular.module('surveyEngine');

    surveyEngine.factory('assignmentsService', ['questionService', function(questionService) {
        var assignments = [];

        function getAssignments() {
            return assignments;
        }

        function setAssignments(assignmentsToSave) {
            assignments = [];
            assignmentsToSave.forEach(function(assignment) {
                var questionsArray = [];
                assignment.forEach(function(question) {
                    questionsArray.push(questionService.createQuestion(question));
                });
                assignments.push(questionsArray);
            });
        }

        function getAssignmentById(assignmentId) {
            return assignments[assignmentId];
        }

        return {
            getAssignments: getAssignments,
            setAssignments: setAssignments,
            getAssignmentById: getAssignmentById
        };
    }]);
})();