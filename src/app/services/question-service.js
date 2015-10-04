'use strict';
(function() {
    var surveyEngine = angular.module('surveyEngine');

    surveyEngine.factory('questionService', function() {

        /**
         * Simple inheritance to behave like classes.
         */
        var inherit = (function() {
            var F = function() {};
            return function(Child, Parent) {
                F.prototype = Parent.prototype;
                Child.prototype = new F();
                Child.uber = Parent.prototype; // super
                Child.prototype.constructor = Child;
            };
        })();

        var Question = function(question) {
            this.init(question);
        };

        Question.prototype = {
            init: function(question) {
                this.question = question.question;
                this.answers = question.answers;
            },
            getQuestion: function() {
                return this.question;
            },
            getAnswers: function() {
                return this.answers;
            }
        };

        var RadioQuestion = function(question) {
            this.constructor.uber.init.call(this, question);
        };
        inherit(RadioQuestion, Question);

        var MultiQuestion = function(question) {
            this.constructor.uber.init.call(this, question);
        };
        inherit(MultiQuestion, Question);

        var DropdownQuestion = function(question) {
            this.constructor.uber.init.call(this, question);
        };
        inherit(DropdownQuestion, Question);

        var TextQuestion = function(question) {
            this.constructor.uber.init.call(this, question);
        };
        inherit(TextQuestion, Question);

        function createQuestion(question) {
            if (!question || !question.type) {
                throw "Unknown question type: " + question;
            }
            switch (question.type) {
                case 'radio':
                    return new RadioQuestion(question);
                case 'multi':
                    return new MultiQuestion(question);
                case 'dropdown':
                    return new DropdownQuestion(question);
                case 'text':
                    return new TextQuestion(question);
                default:
                    throw "Unknown question type: " + question.type;
            }
        }

        return {
            RadioQuestion: RadioQuestion,
            MultiQuestion: MultiQuestion,
            DropdownQuestion: DropdownQuestion,
            TextQuestion: TextQuestion,
            createQuestion: createQuestion
        };
    });
})();