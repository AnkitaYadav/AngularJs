app.controller('aboutController', function ($scope, aboutFactory, $stateParams) {

    $scope.phoneInfo = {
        name: '',
        description: ''
    }
    var phoneid = $stateParams.id;
    $scope.pageName = "About Us Page";
    aboutFactory.getInfo(phoneid).then(function (res) {
        $scope.phoneInfo.name = res.data.name;
        $scope.phoneInfo.description = res.data.description;

    })
})
