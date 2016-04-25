(function () {
    angular.module("ElectricityApp").controller("CalcController", function ($scope, CalcService) {
        $scope.calc = function () {
            CalcService.calc($scope.model).then(function (data) {
                $scope.model.amperage = data;
            });
        };
        $scope.addElement = function () {
            $scope.model = CalcService.addElement($scope.model);
        };
        $scope.removeElement = function () {
            $scope.model = CalcService.addElement($scope.model);
        };
        
        $scope.model = new Bus();
        
        $scope.canBeProcessed = function(){
            return $scope.model.elements.length > 0;
        }
    });
} ());