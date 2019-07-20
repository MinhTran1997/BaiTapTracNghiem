var myApp = angular.module("myApp", []);

myApp.controller("forgotPasswordCtrl", function($scope, $http)
{
	$scope.randomCode = function()
	{
		// var randomNumber = 0;
		 var randomString = "nAkmP";
		//
		// for (var i = 0; i < 4; i++) {
		// 	randomNumber = Math.floor(Math.random() * 10);
		// 	randomString += randomNumber;
		// }

		return randomString;
	};

	$scope.submit = function()
	{
			var stat = "false";
			var pass = "";

			angular.forEach($scope.students, function(item)
			{
				//(item.email == $scope.inputEmail && ($scope.yourcode == "nAkmP")
	      if(item.email == $scope.inputEmail)
	      {
					stat = "true";
					pass = item.password;
	      }
	   });

		 if(stat=="true")
			alert("Password của bạn là: " + pass);
		else
			alert("Vui lòng nhập đúng thông tin!");
	};

	$scope.students;
		$http.get("/db/Students.js")
	  .then(function(response) {
	      $scope.students = response.data;
	  });
});

function showCode()
{
	var x = document.getElementById("code");

	if(document.getElementById("inputEmail").value != "")
		x.style.display = "block";
	else
		x.style.display = "none";
}
