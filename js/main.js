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


 myApp = angular.module("superApp",[]);

 myApp.directive("superhero", function(){
 return{
 restrict: "E",
 scope:{},
 controller: function($scope){
 $scope.abilities = [];
 this.addStrength = function(){
 $scope.abilities.push("strength")
 }
 this.addSpeed = function(){
 $scope.abilities.push("speed")
 }
 this.addFlight = function(){
 $scope.abilities.push("flight")
 }
 },
 link: function(scope, element){
 element.addClass("button");
 element.bind("mouseenter", function(){
 console.log(scope.abilities);
 })
 }
 }

 }).directive("strength",function(){
 return{
 require:"superhero",
 link:function(scope,element,attrs,superheroCtrl){
 superheroCtrl.addStrength();
 }
 }
 }).directive("speed",function(){
 return{
 require:"superhero",
 link:function(scope,element,attrs,superheroCtrl){
 superheroCtrl.addSpeed();
 }
 }
 }).directive("flight",function(){
 return{
 require:"superhero",
 link:function(scope,element,attrs,superheroCtrl){
 superheroCtrl.addFlight();
 }
 }
 })

 myApp = angular.module('choreApp',[]);


 myApp.controller("ChoreCtrl", function($scope){
 $scope.logChore = function (chore) {
 alert(chore + " is done!");
 }
 }

 ).directive("kid",function(){
 return{
 restrict: "E",
 scope:{
 done:"&"
 },
 template: '<input type="text" ng-model="chore">'+
 '{{chore}}'+
 '<div class="button" ng-click="done({chore:chore})">I\'m done</div>'
 }
 });
 myApp = angular.module('drinkApp',[])
 myApp.controller("AppCtrl", ['$scope', function (pope) {
 pope.ctrlFlavor="blackberry"
 }])

 myApp.directive("drink",function(){
 return{
 scope:{
 flavor:"@"
 },
 template:'<div>{{flavor}}</div>'
 /*link:function(scope,element,attrs){
 scope.flavor=attrs.flavor;
 }
 }
 })
 myApp = angular.module('drinkApp',[])
 myApp.controller("AppCtrl", ['$scope', function (pope) {
 pope.ctrlFlavor="blackberry"
 }])

 myApp.directive("drink",function(){
 return{
 scope:{
 flavor:"="
 },
 template:'<input type="text" ng-model="flavor"/>'
 /*link:function(scope,element,attrs){
 scope.flavor=attrs.flavor;
 }
 }
 })

myApp = angular.module('phoneApp',[]);

myApp.controller("AppCtrl", ['$scope', function (scope) {
    scope.callHome= function(message){
        alert(message)
    }

}])
myApp.directive("phone",function(){
    return{
        scope:{
            dial:"&"
        },
        template:'<input type="text" ng-model="value">'+
            '<div class="button" ng-click="dial({message:value})">Call Home</div>'
    }
})


myApp = angular.module('phoneApp',[]);

var myApps = {};
myApps.AppCtrl = function($scope){
    this.sayHi = function(){
        alert("hi")
    }
    return $scope.AppCtrl = this
};

var directives = {}
directives.panel = function(){
    return{
        restrict:"E"
    }
}

myApp.directive(directives);
myApp.controller(myApps);
    */
myApp = angular.module('phoneApp',[]);
