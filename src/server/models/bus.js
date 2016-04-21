"use strict";
var engine = require("./engines/EngineModel");
var Bus = (function () {
    function Bus(voltage, powerCoef, elements) {
        var coef = elements.length <= 10 ? 1.1 : 1;
        var activePower = powerCoef * elements.reduce(function (sum, elem) { return sum + elem.UsingCoefficient * elem.ActivePower * elem.Count; }, 0);
        var reactivePower = coef * elements.reduce(function (sum, elem) {
            return sum + elem.Count * elem.ActivePower * elem.UsingCoefficient * Math.tan(Math.acos(elem.Cos));
        }, 0);
        var totalPower = Math.sqrt(activePower * activePower + reactivePower * reactivePower);
        this.amp = totalPower / (Math.sqrt(3) * voltage);
        engine.find({}, function (err, data) {
            console.log(data);
        });
    }
    Object.defineProperty(Bus.prototype, "amperage", {
        get: function () {
            return this.amp;
        },
        enumerable: true,
        configurable: true
    });
    return Bus;
}());
exports.Bus = Bus;
