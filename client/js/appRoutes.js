angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // Home Page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // Bearded Yeti Page (Placeholder)
        .when('/yeti', {
            templateUrl: 'views/yeti.html',
            controller: 'YetiController'
        });

    $locationProvider.html5Mode(true);

}]);
