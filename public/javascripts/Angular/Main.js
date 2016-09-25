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
    $scope.region = "";
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
        debugger;
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
        // $http.post({
        //     method:'GET',
        //     url: 'api/generateURL'
        // }).then(function successCallback(response){}, function errorCallBack(response){});
        // console.log($scope.form);
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
