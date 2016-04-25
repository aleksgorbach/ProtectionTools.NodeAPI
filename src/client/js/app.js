var app = angular.module("ElectricityApp", ["ngRoute", "ngMessages"]);
app.config([
    "$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/", {
            templateUrl: "/views/calcView.html",
            controller: "CalcController"
        })
            .when("/engines", {
            templateUrl: "views/manage/manageEnginesView.html",
            controller: "EngineController"
        })
            .otherwise({
            redirectTo: "/"
        });
    }
]);

