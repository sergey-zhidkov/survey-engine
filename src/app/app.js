'use strict';
(function() {
    var surveyEngine = angular.module('surveyEngine', ['ngRoute', 'ngResource'])
        .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $routeProvider.when('/new-survey', {
                templateUrl: 'app/templates/new-survey.html',
                controller: 'EditSurveyController'
            });
            $routeProvider.when('/take-survey/:surveyId', {
                templateUrl: 'app/templates/take-survey.html',
                controller: 'TakeSurveyController'
            });
            //$locationProvider.html5Mode({
            //    enabled: true,
            //    requireBase: false
            //});
        }]);
})();
