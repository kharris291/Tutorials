/**
 * Created by Kev on 05/09/2014.
 */

var myApp = myApp || {};

myApp = angular.module('app',[]);

myApp.directive("zippy",function(){
    return{
        restrict:"E",
        transclude:true,
        scope:{
            title:"@"
        },
        templateUrl:'./zippy.html',
        link:function(scope){
            scope.isContentVisible=false;
            scope.toogleContent = function(){
                scope.isContentVisible=!scope.isContentVisible;
            }
        }
    }
});