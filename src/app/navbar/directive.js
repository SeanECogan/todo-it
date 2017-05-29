'use strict';

angular
.module('todo-it')
.directive('navbar',
           function() {
               return {
                   restrict: 'E',                   
                   replace: true,
                   templateUrl: 'app/navbar/view.html'
               };
           });