/**
 * Created by Kev on 05/09/2014.
 */

var myApp = myApp || {};

/*myApp = angular.module('myApp',[])

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


myApp.directive("enter",function(){
    return function(scope, element,attrs){
        element.bind("mouseenter", function(){
            element.addClass(attrs.enter);
        })
    }
})

myApp.directive("leave",function(){
    return function(scope, element, attrs){
        element.bind("mouseleave", function(){
            element.removeClass(attrs.leave);
        })
    }
})
*/

myApp = angular.module("twitterApp",[]);

myApp.controller("AppCtrl", function($scope){
    $scope.loadMoreTweets = function(){
        alert("Loading more tweets");
    }
    $scope.deleteTweets= function(){
        alert("deleting tweets");
    }
})
.directive("enter",function(){
        return function(scope,element,attrs){
            element.bind("mouseenter",function(){
                scope.$apply(attrs.enter);
            })
        }
    })