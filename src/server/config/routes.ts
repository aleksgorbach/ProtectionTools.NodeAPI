///<reference path="../models/bus.ts"/>
import busModel = require("../models/bus");
import engineModel = require("./../models/engines/EngineModel");

export class Router {
    private app;
    constructor(app) {
        this.app = app;
    }

    route() {
        // POST: api/calc
        this.app.post("/api/calc", (req, res) => {
            var model = req.body;
            var bus = new busModel.Bus(model.voltage, model.powerCoef, model.elements);
            res.setHeader("content-type", "text/html");
            res.end(JSON.stringify(bus.amperage));
        });
        
        // GET: /engines
        this.app.get("/engines", (req, res) => {
            engineModel.find({}, function (err, data) {
                if(err !== null){
                    console.log(err);
                }
                res.end(JSON.stringify(data));
            })
        });
        
        // POST: /engines
        this.app.post("/engines", (req, res) => {
            var model = new engineModel();
            model.title = req.body.title;
            model.IpIn = req.body.IpIn;
            model.power = req.body.power;
            model.save();
            res.end(JSON.stringify(model));
        })
        
        // DELETE: /engines
        this.app.delete("/engines/:id", (req, res) => {
            engineModel.findByIdAndRemove(req.params.id, function(err, data) {
                if(err !== null){
                    console.log(err);
                }
                res.end(JSON.stringify(data));   
            });
        })

        /*this.app.get("*", (req, res) => {
            res.redirect("/");
        });*/
    }
}
