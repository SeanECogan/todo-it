'use strict';

angular
.module('todo-it')
.directive('todoFocus',
           function () {
                return {
                    require: '^?todoController',
                    link: function (scope, element) {
                        if (scope.$parent && scope.$parent.$last) {
                            element[0].focus();
                        }
                    }
                };
            });