(function () {
    angular.module("ElectricityApp").service("EngineService", ["$http", function ($http) {
        var getList = function () {
            return $http.get("/engines").then(function (response) { return response.data; });
        }

        var add = function (engine) {
            return $http.post("/engines", engine).then(function (response) {
                return response.data;
            });
        }

        var remove = function (engineId) {
            return $http.delete("/engines/" + engineId).then(function (response) {
                return response.data;
            });
        }

        return {
            getList: getList,
            add: add,
            remove: remove
        }
    }])
} ())