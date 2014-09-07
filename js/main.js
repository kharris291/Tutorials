/**
 * Created by Kev on 05/09/2014.
 */

var myApp = myApp || {};


myApp = angular.module('myApp',[])

myApp.directive("superman", function(){
    return{
        restrict:"E",
        template:"<div>Here I am to save the day</div>"
    }

})

myApp.directive("superman1", function(){
    return{
        restrict:"A",
        link: function(){
            alert("I am working stronger!")
        }
    }

})

myApp.directive("flash", function(){
    return{
        restrict:"A",
        link: function(){
            alert("I am working faster!")
        }
    }

})

