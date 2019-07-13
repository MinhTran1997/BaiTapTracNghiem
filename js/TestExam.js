
    var app = angular.module('testExam', []); 
    app.controller('myCtrl', function($scope, $http) {
        $http({
            method : "GET",
            url : "db/Quizs/ADAV.js"
        }).then(function mySuccess(response){
            var list = response.data;
            $scope.list = list;     
        });
    });
