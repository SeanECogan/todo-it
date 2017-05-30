'use strict';

angular
.module('todo-it')
.directive('todoBlur',
           function() {
               return function(scope, element, attrs) {
                    element.bind("keydown keypress", function(event) {
                        if(event.which === 13 && !event.shiftKey) {
                            event.preventDefault();
                            event.srcElement.blur();
                        }
                    });
                };
           });