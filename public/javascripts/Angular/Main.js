/**
 * Created by rahilvora on 9/24/16.
 */

var policyLinksApp = angular.module("policyLinksApp",["ngRoute"]);

policyLinksApp.controller("LinkController",["$scope","$http","$location", function($scope, $http, $location){

    $scope.states = [];
    $scope.region = "";
    $scope.usl = "";
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
    $scope.saveRegion = function(){
        $scope.region = $scope.selectedValue.split(" ")[0];
        $location.path('/selectorPage');
    };

    $scope.generate = function(){
        var baseURL = "http://107.170.124.232/export/url?url=http://nationalequityatlas.org/indicators/";
        if($scope.form.selectedValue == "Race/Ethnicity"){
            baseURL += "Race~ethnicity/";
        }
        baseURL +=$scope.region;
        console.log(baseURL);
    };
    function createCORSRequest(method, url) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {

            // Check if the XMLHttpRequest object has a "withCredentials" property.
            // "withCredentials" only exists on XMLHTTPRequest2 objects.
            xhr.open(method, url, true);

        } else if (typeof XDomainRequest != "undefined") {

            // Otherwise, check if XDomainRequest.
            // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
            xhr = new XDomainRequest();
            xhr.open(method, url);

        } else {

            // Otherwise, CORS is not supported by the browser.
            xhr = null;

        }
        return xhr;
    }
    $scope.generateURL2 = function(){
        
    };
    $scope.generateURL3 = function(){
        var baseURL = "http://107.170.124.232/export/url?url=http://nationalequityatlas.org/indicators/";
        if($scope.form.economicbenefits == "Income Gains with Racial Equity"){
            baseURL += "Income_gains_with_racial_equity/";
        }
        if($scope.form.selectedValue1 == "Income")
            baseURL += "Income:32771/";
        if($scope.form.selectedValue1 == "Income gains")
            baseURL += "Income_gains:32776/";
        if($scope.form.selectedValue1 == "Source of gains")
            baseURL += "Source_of_gains:32781/";
        baseURL +=$scope.region;
        console.log(baseURL);
        $scope.url = baseURL;
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
            templateUrl: '../view/home.ejs',
            controller : 'LinkController'
        })
    }]);
