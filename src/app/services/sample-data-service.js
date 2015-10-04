'use strict';
(function() {
    var surveyEngine = angular.module('surveyEngine');

    surveyEngine.factory('sampleDataService', function() {
        var sampleData = {
            assignments: [
                [
                    {
                        type: 'radio',
                        question: 'Question1',
                        answersIndexes: [2],
                        answers: [
                            'Ans1',
                            'Ans2',
                            'Ans3'
                        ]
                    },
                    {
                        type: 'multi',
                        question: 'Question2',
                        answersIndexes: [0, 2],
                        answers: [
                            'Ans1',
                            'Ans2',
                            'Ans3',
                            'Ans4'
                        ]
                    },
                    {
                        type: 'dropdown',
                        question: 'Question3',
                        answersIndexes: [0],
                        answers: [
                            'Ans1',
                            'Ans2',
                            'Ans3'
                        ]
                    },
                    {
                        type: 'text',
                        question: 'Question4',
                        answers: ['Some Answer']
                    }
                ]
            ]
        };

        function getSampleData() {
            return angular.copy(sampleData);
        }

        return {
            getSampleData: getSampleData
        };
    });
})();