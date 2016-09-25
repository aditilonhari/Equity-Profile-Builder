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
    $scope.states = [];
    $http({
        method: 'GET',
        url: '/api/getForm'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available

        for(obj in response.data){
            if(response.data[obj].country == "US"){
                $scope.states.push(response.data[obj]);
            }
        }
        console.log("SuccessCall back")
    }, function errorCallback(response) {
        console.log("error call back")
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

    $scope.generate = function(){
        console.log("here");
    };
}]);

//Routes

policyLinksApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/form',{
            templateUrl: '../view/form.ejs',
            controller : 'LinkController'
        }).
        when('/selectorPage',{
            templateUrl: '../view/selectorpage.ejs',
            controller : 'LinkController'
        }).
        otherwise({
            redirectTo: "/"
        })
    }]);
