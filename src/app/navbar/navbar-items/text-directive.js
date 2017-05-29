angular
.module('todo-it')
.directive('navbarText',
           function() {
               return {
                   restrict: 'E',
                   replace: true,
                   templateUrl: 'app/navbar/navbar-items/navbar-text.html',
                   scope: {
                       text: '='
                   }
               };
           });