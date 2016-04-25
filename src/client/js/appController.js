(function(){
   angular.module("ElectricityApp").controller("AppController", ["$scope", "$location", function($scope, $location){
       $scope.engines = function(){
           $location.path("/engines");
       }
   }]);
}())