var myApp=angular.module('myApp',[]);
myApp.controller('myCtrl',function($scope) {
	$scope.submitForm =function() {
		if ($scope.Form.comment.value == null) 
		{
			alert('Bạn chưa nhập nội dung');
		}
		else 
		{
			alert('Cảm ơn bạn đã phản hồi');
		}
	};
});