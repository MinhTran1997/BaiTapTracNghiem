var app = angular.module('myApp', []);
app.controller('questionCtrl', function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'db/Quizs/ADAV.js'

    }).then(function successCallback(response) {
        //define variable
        $scope.questions = response.data;
        $scope.count = 0;
        $scope.rightAnswer = $scope.questions[$scope.count].AnswerId;
        $scope.point = 0;

        var questionId = $scope.questions[$scope.count].Id;
        var check = [];
        var correctAnswers = [];


        $scope.next = function () {
            if ($scope.count !== $scope.questions.length - 1)
                $scope.count++;
            $scope.rightAnswer = $scope.questions[$scope.count].AnswerId;
        }
        $scope.prev = function () {
            if ($scope.count !== 0)
                $scope.count--;
            $scope.rightAnswer = $scope.questions[$scope.count].AnswerId;
        }
        $scope.first = function () {
            $scope.count = 0;
            $scope.rightAnswer = $scope.questions[$scope.count].AnswerId;
        }
        $scope.last = function () {
            $scope.count = $scope.questions.length - 1;
            $scope.rightAnswer = $scope.questions[$scope.count].AnswerId;
        }

        $scope.checkAnswer = function (myChoice) {

            if (myChoice === $scope.rightAnswer) {
                //do something if true
                console.log('OK');

                check[$scope.count] = true;
                correctAnswers.push({
                    questionId: questionId,
                    yourAnwser: myChoice,
                    point: $scope.questions[$scope.count].Marks
                });
                console.log(correctAnswers.length);
            }
            //do something if false
            else if (check[$scope.count] === true) {
                console.log('wrong');
                correctAnswers.pop();
                console.log(correctAnswers.length);
                check[$scope.count] = false;

            }


        }
        $scope.mark = function () {
            //  $scope.point= correctAnswers.length;

            alert('Kết quả: bạn đã làm đúng được ' + correctAnswers.length + ' câu!');


        }


    }, function errorCallback(response) {
        console.log("response--" + response);
    });


});