app.controller('homeController', ['$scope', 'homeFactory', function ($scope, homeFactory) {

	$scope.pageName = "Home Page";
	$scope.phoneList = [];
	$scope.pageSize = 5;
	homeFactory.getData().then(function (res) {

		$scope.phoneList = res.data;
		$scope.totalItems = $scope.phoneList.length;
		setPagingData($scope.currentPage);

	});

	var success = function (res) {
		$scope.a = res.data;
	}
	var error = function () {

		alert("error");

	}
	$scope.sortBy = function (property) {

		var prop = $scope.propertyName != null && $scope.propertyName === property ? "-" + property : property;
		$scope.propertyName = prop;

	}

	$scope.currentPage = 1;
	$scope.totalItems = $scope.phoneList.length;
	$scope.itemsPerPage = $scope.pageSize;

	$scope.$watch('currentPage', function () {

		setPagingData($scope.currentPage);
	});

	function setPagingData(page) {

		//var pagedData = $scope.phoneList.slice((page - 1) * $scope.itemsPerPage, page * $scope.itemsPerPage);
		var pagedData = $scope.phoneList.slice((page - 1) * $scope.pageSize, page * $scope.pageSize);
		$scope.phoneLists = pagedData;
	}

	$scope.getPageSize = function (size) {
		debugger;
		$scope.pageSize = size;
		setPagingData($scope.currentPage);
	}





}])
