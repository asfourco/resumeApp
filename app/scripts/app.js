'use strict';

angular.module('resumeApp', [
    'ngResource',
    'ngSanitize',
    'ngRoute'
])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/experience', {
                templateUrl: 'views/experience.html',
                controller: 'ExpCtrl'
            })
            .when('/education', {
                templateUrl: 'views/education.html',
                controller: 'EdCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            })
            .when('/international', {
                templateUrl: 'views/international.html',
                controller: 'IntlCtrl'
            })
            .when('/test', {
                templateUrl: 'views/test.html',
                controller: 'testCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(false);
        // $locationProvider.hashPrefix('!');
    })
    .factory('Data', ['$resource', function($resource) {
        return $resource('lib/:fileId.json', {}, {
            query: {method:'GET', params:{fileId:'profile'}, isArray:true}
        });
    }]);