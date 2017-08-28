'use strict';

angular
.module('todo-it')
.controller("todoController",
            ['$scope',
            function ($scope) {
                $scope.addTodoItem = addTodoItem;
                $scope.updateTodoItem = updateTodoItem;
                $scope.moveUpTodoItem = moveUpTodoItem;
                $scope.moveDownTodoItem = moveDownTodoItem;
                $scope.removeTodoItem = removeTodoItem;
                $scope.hasIncompleteTodoItems = hasIncompleteTodoItems;
                $scope.hasCompleteTodoItems = hasCompleteTodoItems;

                $scope.todoItems = [];

                function addTodoItem() {
                    var newOrder = 0;

                    $scope.todoItems.map(function(todoItem) {
                        if (todoItem.order > newOrder) {
                            newOrder = todoItem.order;
                        }
                    });

                    $scope.todoItems.push({
                        isComplete: false,
                        text: "",
                        order: newOrder + 1
                    });
                }

                function updateTodoItem(todoItem) {
                    if (todoItem.isComplete && 
                        todoItem.isComplete == true) {
                        fillInTodoItems(todoItem);

                        var completedOrder = 0;
                        
                        $scope.todoItems.map(function(completedTodoItem) {
                            if (completedTodoItem.isComplete &&
                                completedTodoItem.order > completedOrder &&
                                completedTodoItem != todoItem) {
                                completedOrder = completedTodoItem.order;
                            }
                        });

                        todoItem.order = completedOrder + 1;
                    }
                }

                function moveUpTodoItem(todoItem) {
                    if (todoItem.order > 1) {
                        todoItem.order--;

                        adjustTodoItemsDown(todoItem);
                    }
                }

                function moveDownTodoItem(todoItem) {
                    if (todoItem.order < $scope.todoItems.filter(function(todoItem) {
                            return !todoItem.isComplete;
                        }).length) {
                        todoItem.order++;

                        adjustTodoItemsUp(todoItem);
                    }
                }

                function removeTodoItem(todoItem) {
                    fillInTodoItems(todoItem);

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

                function adjustTodoItemsDown(todoItem) {
                    $scope.todoItems.map(function(currentTodoItem) {
                        if(currentTodoItem != todoItem &&
                           currentTodoItem.order == todoItem.order &&
                           !currentTodoItem.isComplete) {
                            currentTodoItem.order++;

                            adjustTodoItemsDown(currentTodoItem);
                        }
                    });
                }

                function adjustTodoItemsUp(todoItem) {
                    $scope.todoItems.map(function(currentTodoItem) {
                        if(currentTodoItem != todoItem &&
                           currentTodoItem.order == todoItem.order &&
                           !currentTodoItem.isComplete) {
                            currentTodoItem.order--;

                            adjustTodoItemsUp(currentTodoItem);
                        }
                    });
                }

                function fillInTodoItems(todoItem) {
                    $scope.todoItems.map(function(currentTodoItem) {
                        if(currentTodoItem != todoItem &&
                           currentTodoItem.order >= todoItem.order &&
                           !currentTodoItem.isComplete) {
                            currentTodoItem.order--;
                        }
                    });
                }
            }
        ]
    );