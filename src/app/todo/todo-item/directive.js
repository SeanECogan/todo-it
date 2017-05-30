'use strict';

angular
.module('todo-it')
.directive('todoItem',
           function() {
               return {
                   restrict: 'E',                   
                   replace: true,
                   templateUrl: 'app/todo/todo-item/view.html',
                   scope: {
                       todoItem: '=',
                       removeTodoItem: '&'
                   }
               };
           });