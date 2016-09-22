'use strict';

angular
    .module('resumeApp')
    .controller('MainCtrl', function($scope, Data) {
        $scope.data = Data.query({fileId:'profile'});
    })
    .controller('ExpCtrl', function($scope, Data) {
        $scope.data = Data.query({fileId:'experience'});
    })
    .controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.navClass = function (page) {
            var currentRoute = $location.path().substring(1) || 'profile';
            return page === currentRoute ? 'active' : '';
        };        
    }])
    .controller('EdCtrl', function($scope, Data) {
        $scope.data = Data.query({fileId:'education'});
        $scope.profDev = Data.query({fileId:'profdev'});
    })
    .controller('ContactCtrl', function($scope, Data) {
        $scope.data = Data.query({fileId:'contact'});
         
    })
    .controller('IntlCtrl', function($scope, Data) {
        $scope.data = Data.query({fileId:'intl'});
    });
