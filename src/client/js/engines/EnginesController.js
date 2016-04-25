angular.module("ElectricityApp").controller("EngineController", ["$scope", "EngineService", function ($scope, EngineService) {
    EngineService.getList().then(function(data){
        $scope.engines = data;
    })
    
    $scope.addEngine = function(){
        EngineService.add({
            title: $scope.title,
            power: $scope.power,
            IpIn: $scope.IpIn
        }).then(function(data){
            $scope.engines.push(data);
        });
    }
    
    $scope.remove = function(engine){
        EngineService.remove(engine._id).then(function(data){
            var index = $scope.engines.indexOf(data);
            $scope.engines.splice(index, 1);
        });
    }
    
    $scope.canBeAdded = function(){
        return $scope.title.length && $scope.power && $scope.IpIn;
    }
}]);