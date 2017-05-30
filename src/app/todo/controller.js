'use strict';

angular
.module('todo-it')
.controller("todoController",
            ['$scope',
            function ($scope) {
                $scope.addTodoItem = addTodoItem;
                $scope.removeTodoItem = removeTodoItem;
                $scope.hasIncompleteTodoItems = hasIncompleteTodoItems;
                $scope.hasCompleteTodoItems = hasCompleteTodoItems;

                $scope.todoItems = [];

                function addTodoItem() {
                    $scope.todoItems.push({
                        isComplete: false,
                        text: ""
                    });
                }

                function removeTodoItem(todoItem) {
                    $scope.todoItems.splice($scope.todoItems.indexOf(todoItem), 1);
                }

                function hasIncompleteTodoItems() {
                    return $scope.todoItems.some(function(todoItem) {
                        return !todoItem.isComplete;
                    });
                }

                function hasCompleteTodoItems() {
                    return $scope.todoItems.some(function(todoItem) {
                        return todoItem.isComplete;
                    });
                }
            }
        ]
    );