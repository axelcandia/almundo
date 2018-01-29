// public/js/appRoutes.js
angular.module('appRoutes', [])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/hotel.html',
            controller: 'HotelController'
        }) 

    $locationProvider.html5Mode(true);

}]);
