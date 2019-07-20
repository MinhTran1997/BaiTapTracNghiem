var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
  $scope.submit = function () {
    var stat = "false";
    angular.forEach($scope.mydata, function (item) {
      if ((item.username == $scope.regObj.username) && (item.password == $scope.regObj.password)) {
        stat = "true";
      }
    });
    $scope.regObj.username = "";
    $scope.regObj.password = "";
    if (stat == "true")
      window.location.href = 'index.html';
    else
      alert("Sai tên đăng nhập hoặc mật khẩu, vui lòng nhập lại!");
  };

  $scope.regObj = {
    "username": "",
    "password": ""
  };

  $scope.mydata;
  $http.get("https://api.myjson.com/bins/12agpj")
    .then(function (response) {
      $scope.mydata = response.data;
      angular.forEach($scope.mydata, function (item) {})

    });


});