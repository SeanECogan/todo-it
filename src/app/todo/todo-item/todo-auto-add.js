'use strict';

angular
.module('todo-it')
.directive('todoAutoAdd',
           function() {
               return function(scope, element, attrs) {
                    element.bind("keydown keypress", function(event) {
                        if(event.which === 13 && !event.shiftKey) {
                            event.preventDefault();
                            
                            if (scope.todoItem && 
                                scope.todoItem.text &&
                                scope.$parent && 
                                scope.$parent.$parent) {
                                scope.$parent.$parent.$apply(function() {
                                    scope.$parent.$parent.addTodoItem();
                                });
                            }
                        }
                    });
                };
           });