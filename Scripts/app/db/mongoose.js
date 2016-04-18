///<reference path="../../typings/mongoose/mongoose.d.ts"/>
var mongoose = require("mongoose");
var Mongoose = (function () {
    function Mongoose() {
        this.connectionString = "mongodb://localhost/test1";
    }
    Mongoose.prototype.connect = function () {
        mongoose.connect(this.connectionString);
        this.connection = mongoose.connection;
    };
    return Mongoose;
})();
exports.Mongoose = Mongoose;
//# sourceMappingURL=mongoose.js.map