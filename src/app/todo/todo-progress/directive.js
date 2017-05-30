'use strict';

angular
.module('todo-it')
.directive('todoProgress',
           function() {
               return {
                   restrict: 'E',                   
                   replace: true,
                   templateUrl: 'app/todo/todo-progress/view.html',
                   scope: {
                       todoItems: '='
                   }
               };
           });