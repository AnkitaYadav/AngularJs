app.controller('aboutController', function ($scope, aboutFactory, $stateParams) {

	$scope.phoneInfo = {
		name: '',
		description: '',
		availability: '',
		battery: '',
		storage: ''
	}
	var phoneid = $stateParams.id;
	$scope.pageName = "About Us Page";
	aboutFactory.getInfo(phoneid).then(function (res) {

		$scope.phoneInfo.name = res.data.name;
		$scope.phoneInfo.description = res.data.description;
		$scope.phoneInfo.availability = res.data.availability;
		$scope.phoneInfo.battery = res.data.battery;
		$scope.phoneInfo.storage = res.data.storage;

	});

	$scope.getContaint = function ($event) {

		$(event.target).toggleClass('selected');
	}
});
