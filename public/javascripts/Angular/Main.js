/**
 * Created by rahilvora on 9/24/16.
 */

var policyLinksApp = angular.module("policyLinksApp",["ngRoute"]);

policyLinksApp.controller("LinkController",["$scope","$http","$location", function($scope, $$http, $location){
    $http.get('api/getForm').then(function(result){
        var data = resule.data;

    });
}]);

//Routes

policyLinksApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('#/form',{
            templateUrl: '../view/form.ejs',
            controller : 'LinkController'
        }).
        otherwise({
            redirectTo: "/"
        })
    }]);
