/**
 * Created by Kev on 05/09/2014.
 */

var myApp = angular.module('myApp',[])
    .factory('Data', function(){

        return {message:"I'm data from a service"}
    })

function FirstCtrl($scope, Data){
    $scope.data = Data;
}

function SecondCtrl($scope, Data){
    $scope.data= Data;

    $scope.reversedMessage = function(message){
        return message.split("").reverse().join("");
    }
}

