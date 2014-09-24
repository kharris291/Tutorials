/**
 * Created by Kev on 05/09/2014.
 */

var myApp = myApp || {};

myApp = angular.module('app',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/',
        {
            templateUrl:"./view/app.html",
            controller:"AppCtrl"
        })
        .when('/:message',
        {
            templateUrl:"./view/app.html",
            controller:"AppCtrl"
        }).when('/map/:country/:state/:city',
        {
            templateUrl:"./view/app.html",
            controller:"AppCtrl"
        })
        .when('/pizza',{
            template:"YUM"
        })
        .otherwise({
            redirectTo:"/"
        })
});

myApp.controller("AppCtrl", function($scope,$routeParams){
    $scope.model ={
        message: "Address: "
            + $routeParams.country +", "
            + $routeParams.state +", "
            + $routeParams.city+", "
    }
});