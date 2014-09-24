/**
 * Created by Kev on 05/09/2014.
 */

var myApp = myApp || {};

myApp = angular.module('app',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/',
        {
            templateUrl:"./view/app.html",
            controller:"AppCtrl",
            resolve:{
                loadData:appCtrl.loadData,
                prepData:appCtrl.prepData
            }
        })
});

var appCtrl = myApp.controller("AppCtrl", function($scope,$q){
    $scope.model ={
        message: "This is my app"
    }
});

appCtrl.loadData=function($q, $timeout){
    var defer = $q.defer();

    $timeout(function(){
        defer.resolve("loadData");
    },2000);

    return defer.promise;
};

appCtrl.prepData = function($q, $timeout){
    var defer = $q.defer();

    $timeout(function(){
        defer.resolve("prepData");
    },2000);

    return defer.promise;
}