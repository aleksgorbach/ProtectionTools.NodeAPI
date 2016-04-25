"use strict";
var busModel = require("../models/bus");
var engineModel = require("./../models/engines/EngineModel");
var Router = (function () {
    function Router(app) {
        this.app = app;
    }
    Router.prototype.route = function () {
        this.app.post("/api/calc", function (req, res) {
            var model = req.body;
            var bus = new busModel.Bus(model.voltage, model.powerCoef, model.elements);
            res.setHeader("content-type", "text/html");
            res.end(JSON.stringify(bus.amperage));
        });
        this.app.get("/engines", function (req, res) {
            engineModel.find({}, function (err, data) {
                if (err !== null) {
                    console.log(err);
                }
                res.end(JSON.stringify(data));
            });
        });
        this.app.post("/engines", function (req, res) {
            var model = new engineModel();
            model.title = req.body.title;
            model.IpIn = req.body.IpIn;
            model.power = req.body.power;
            model.save();
            res.end(JSON.stringify(model));
        });
        this.app.delete("/engines/:id", function (req, res) {
            engineModel.findByIdAndRemove(req.params.id, function (err, data) {
                if (err !== null) {
                    console.log(err);
                }
                res.end(JSON.stringify(data));
            });
        });
    };
    return Router;
}());
exports.Router = Router;
