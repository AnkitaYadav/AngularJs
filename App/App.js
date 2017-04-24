var app = angular.module('myApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider.state({

        name: 'home',
        url: '/phone',
        templateUrl: 'Templates/home.html',
        controller: 'homeController'

    })
    $stateProvider.state({

        name: 'home.sub',
        url: '/sub',
        template: '<h1>SubMenu of Home</h1>',
        controller: 'homeController'

    })
    $stateProvider.state({

        name: 'contact',
        url: '/contact',
        templateUrl: 'Templates/contact.html',
        controller: 'contactController'

    })
    $stateProvider.state({

        name: 'about',
        url: '/phone/:id',
        templateUrl: 'Templates/about.html',
        controller: 'aboutController'

    });
});
