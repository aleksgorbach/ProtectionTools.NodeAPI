"use strict";
var busModel = require("../models/bus");
var Router = (function () {
    function Router(app) {
        this.app = app;
    }
    Router.prototype.route = function () {
        this.app.post("/api/calc", function (req, res) {
            var model = req.body;
            var bus = new busModel.Bus(model.NominalVoltage, model.PowerCoef, model.Elements);
            res.end(JSON.stringify(bus.amperage));
        });
        this.app.get("*", function (req, res) {
            res.redirect("/");
        });
    };
    return Router;
}());
exports.Router = Router;
