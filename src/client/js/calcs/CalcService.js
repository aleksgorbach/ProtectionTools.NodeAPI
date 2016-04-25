(function () {
    angular.module("ElectricityApp").service("CalcService", function ($http) {
        var calc = function (model) {
            return $http.post("/api/calc", model).then(function (response) { return response.data; });
        };
        var addElement = function (model) {
            model.elements.push(new Receiver());
            return model;
        };

        var removeElement = function (elem, model) {
            var index = model.elements.indexOf(elem);
            model.elements.splice(index, 1);
            return model;
        };
        return {
            calc: calc,
            addElement: addElement,
            removeElement: removeElement
        };
    });
} ());

