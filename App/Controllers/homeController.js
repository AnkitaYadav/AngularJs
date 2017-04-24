app.controller('homeController', ['$scope', 'homeFactory', function ($scope, homeFactory) {

    $scope.pageName = "Home Page";
    homeFactory.getData().then(function (res) {
        $scope.phoneList = res.data;

    });

    var success = function (res) {
        $scope.a = res.data;
    }
    var error = function () {

        alert("error");

    }


}])
