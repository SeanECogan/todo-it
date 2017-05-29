'use strict';

angular
.module('todo-it')
.directive('todo',
           function() {
               return {
                   restrict: 'E',                   
                   replace: true,
                   templateUrl: 'app/todo/view.html'
               };
           });