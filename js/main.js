/**
 * Created by Kev on 05/09/2014.
 */

var myApp = myApp || {};

myApp = angular.module('app',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider.when('/',
        {
            templateUrl:"./view/app.html",
            controller:"ViewCtrl",
            resolve:{
                loadData:viewCtrl.loadData
            }
        }).when('/new',
        {
            templateUrl:"./view/new.html",
            controller:"NewCtrl",
            resolve:{
                loadData:viewCtrl.loadData
            }
        })
});

myApp.directive("error",function($rootScope){
    return{
        restrict:"E",
        templateUrl:"./view/error.html",
        link:function(scope){
            $rootScope.$on("$routeChangeError", function(event,current,previous,rejection){
                scope.isError = true;
            })
        }
    }
})


myApp.controller("AppCtrl",function($scope,$rootScope,$route,$location){
    $rootScope.$on("$routeChangeStart", function(event,current,previous,rejection){
        console.log(rejection)
    })
    $rootScope.$on("$routeChangeSuccess", function(event,current,previous,rejection){
        console.log(rejection)
    })
})

var viewCtrl = myApp.controller("ViewCtrl", function($scope,$q,$location){
    $scope.changeRoute = function(){
        $location.path("/new");
    }
});

myApp.controller("NewCtrl",function($scope,loadData,$template){

})

viewCtrl.loadData=function($q, $timeout){
    var defer = $q.defer();

    $timeout(function(){
        defer.resolve("success");
    },500);

    return defer.promise;
};
