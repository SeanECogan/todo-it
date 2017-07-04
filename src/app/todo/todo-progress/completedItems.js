'use strict';

angular
.module('todo-it')
.filter('completedItems',
        function() {
          return function (todos) {
                    return todos.filter(function (todo) {
                      return todo.isComplete && todo.text;
                    }); 
                 }
        });