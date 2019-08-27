var app = angular.module('myApp', ['ngCookies']);

app.controller('myCtrlLogin', function ($scope, $http, $cookies) {
    $http({
        method: "GET",
        url: "http://localhost:8080/readers"
    }).then(function mySuccess(response) {
        $scope.readers = response.data;
        var stat = "false";
        $scope.login = function () {
            for (var i = 0; i < $scope.readers.length; i++) {
                if ($scope.readers[i].uSERNAME_DG == $scope.username &&
                    $scope.readers[i].pASSWORD_DG == $scope.password) {
                    $cookies.putObject("reader", $scope.readers[i]);
                    window.location.href = "index.html";
                    stat = "true";
                }
                if (stat == "false") {
                    document.getElementById('btnInvalid').innerHTML = 'Invalid username or password!';
                }
            }
        }
    });
})

app.controller('myCtrlIndex', function ($scope, $cookies) {
    $scope.reader = $cookies.getObject("reader");
    if ($scope.reader == null) {
        alert("Please login!");
        window.location.href = "log-in.html";
    }
    $scope.logout = function () {
        $cookies.remove("reader");
        window.location.href = "log-in.html";
    }
})