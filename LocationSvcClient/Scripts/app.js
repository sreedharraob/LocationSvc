/// <reference path="lib/angular.min.js" />

var locationApp = angular.module('locationApp', ['AdalAngular']);

locationApp.config(['$httpProvider', 'adalAuthenticationServiceProvider', function ($httpProvider, adalAuthenticationServiceProvider) {
    var endpoints = {
        "https://localhost:44338": "https://petrofaconline.onmicrosoft.com/PetrofacLocationSvc"
    };

    adalAuthenticationServiceProvider.init({
        instance: 'https://login.microsoftonline.com/',
        tenant: 'petrofaconline.onmicrosoft.com',
        clientId: '46a1d4a8-7e6b-491d-b27a-b38f61f9dd47',        
        endpoints: endpoints
    }, $httpProvider);

}]);

var locationController = locationApp.controller("locationController", ['$scope', '$http', 'adalAuthenticationService',
    function ($scope, $http, adalAuthenticationService) {
        $scope.getLocation = function () {
            $http.get("https://localhost:44338/api/location?cityName=dc").success(function (location) {
                $scope.city = location;               
            });          
        }

        $scope.login = function () {
            adalAuthenticationService.login();
        }

        $scope.logout = function () {            
            adalAuthenticationService.logOut();
        }
    }]);