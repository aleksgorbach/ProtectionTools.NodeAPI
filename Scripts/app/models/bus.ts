///<reference path="../db/mongoose.ts"/>

import db = require("../db/mongoose");

export class Bus {
    private amp: number;

    constructor(voltage, powerCoef, elements) {
        const coef = elements.length <= 10 ? 1.1 : 1;
        var activePower = powerCoef * elements.reduce(function(sum, elem) { return sum + elem.UsingCoefficient * elem.ActivePower * elem.Count }, 0);
        var reactivePower = coef * elements.reduce(function (sum, elem) {
            return sum + elem.Count * elem.ActivePower * elem.UsingCoefficient * Math.tan(Math.acos(elem.Cos));
        }, 0);
        var totalPower = Math.sqrt(activePower * activePower + reactivePower * reactivePower);
        this.amp = totalPower / (Math.sqrt(3) * voltage);
        new db.Mongoose().connect();
    }

    get amperage(): number {
        return this.amp;
    }
}
