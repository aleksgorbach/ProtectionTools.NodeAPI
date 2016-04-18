///<reference path="../models/bus.ts"/>
import busModel = require("../models/bus");

export class Router {
    private app;
    constructor(app) {
        this.app = app;
    }

    route() {
        this.app.get("*", (req, res) => {
            res.redirect("/");
        });

        // POST: api/calc
        this.app.post("/api/calc", (req, res) => {
            var model = req.body;
            var bus = new busModel.Bus(model.NominalVoltage, model.PowerCoef, model.Elements);
            res.end(JSON.stringify(bus.amperage));
        });
    }
}
