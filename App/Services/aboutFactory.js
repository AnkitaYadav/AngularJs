app.factory('aboutFactory', function ($http) {

    this.getInfo = function (phoneid) {
        return $http.get("http://angular.github.io/angular-phonecat/step-14/app/phones/" + phoneid + ".json");

    }
    return this;

})
