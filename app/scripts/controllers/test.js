'use strict';

angular
    .module('resumeApp')
    .controller('testCtrl', ['$scope', 'Data', function($scope, Data) {
    $scope.message = 'THIS IS A TEST ...';
    $scope.data = Data.query({fileId:'profile'});
}]);