/**
 * Created by rahilvora on 9/24/16.
 */

var policyLinksApp = angular.module("policyLinksApp",["ngRoute"]);

policyLinksApp.controller("LinkController",["$scope","$http","$location", function($scope, $http, $location){
    // $http.get('api/getForm').success(function (result) {
    //     debugger;
    //     console.log(result);
    // });
    // Simple GET request example:
    $http({
        method: 'GET',
        url: '/api/getForm'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log("SuccessCall back")
    }, function errorCallback(response) {
        console.log("error call back")
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
}]);

//Routes

policyLinksApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/form',{
            templateUrl: '../view/form.ejs',
            controller : 'LinkController'
        }).
        otherwise({
            redirectTo: "/"
        })
    }]);
