var myApp = angular.module("myApp", []);

myApp.controller("forgotPasswordCtrl", function($scope, $http)
{
	$scope.randomCode = function()
	{
		// var randomNumber = 0;
		 var randomString = "abc";
		//
		// for (var i = 0; i < 4; i++) {
		// 	randomNumber = Math.floor(Math.random() * 10);
		// 	randomString += randomNumber;
		// }

		return randomString;
	};

	$scope.submit = function()
	{
		angular.forEach($scope.students, function(item){
                  if((item.inputEmail==$scope.email)||($scope.code==$scope.randomCode))
                  {
                    alert("Password của bạn là: " + item.password);
                  }
									else
									{
										alert("Oops!");
									}
               });
	};

	$scope.students;
		$http.get("/db/Students.js")
	  .then(function(response) {
	      $scope.students = response.data;
	  });
});
