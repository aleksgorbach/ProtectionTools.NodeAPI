"use strict";
var mongoose = require("mongoose");
var config_1 = require("../config/config");
var Mongoose = (function () {
    function Mongoose() {
        this.config = new config_1.Config();
        this.connect();
    }
    Mongoose.prototype.connect = function () {
        mongoose.connect(this.config.get("mongoose:uri"));
        this.connection = mongoose.connection;
        this.connection.on("error", function (err) {
            console.error(err);
        });
        this.connection.once("open", function () {
            console.log("connected to db");
        });
    };
    return Mongoose;
}());
exports.Mongoose = Mongoose;
