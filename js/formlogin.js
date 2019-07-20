var myApp=angular.module('myApp',[]);

myApp.controller('myCtrl', function($scope, $http) {
	$scope.submit = function() {
		var stat="false";

		angular.forEach($scope.mydata, function(item){
                  if((item.username==$scope.username)&&(item.password==$scope.password))
                  {
                    stat="true";
                  }
               });
<<<<<<< HEAD

	  if(stat=="true")
		{
	    window.location.href = 'index.html';
		}
	  else
	    alert("Sai tên đăng nhập hoặc mật khẩu, vui lòng nhập lại!");
  };

	$scope.regObj = {
 		 "username" : "",
 		 "password" : ""
 	 };
=======
$scope.regObj.username="";
$scope.regObj.password="";
  if(stat=="true")
    window.location.href = 'index.html';
  else
    alert("Sai tên đăng nhập hoặc mật khẩu, vui lòng nhập lại!");
  
};
  
 $scope.regObj = {
			"username" : "",
			"password" : ""
		};
>>>>>>> 00ce6e894316cab42ddfc58d9980905e1cf11e25

$scope.mydata;
  //$http.get("https://api.myjson.com/bins/12agpj")
	$http.get("/db/Students.js")
  .then(function(response) {
      $scope.mydata = response.data;
<<<<<<< HEAD
=======
       angular.forEach($scope.mydata, function(item){
               })    
>>>>>>> 00ce6e894316cab42ddfc58d9980905e1cf11e25
  });

});
