app.factory('homeFactory', function ($http) {

    this.getData = function () {
        return $http.get("http://angular.github.io/angular-phonecat/step-8/app/phones/phones.json")
    }
    return this;

})
