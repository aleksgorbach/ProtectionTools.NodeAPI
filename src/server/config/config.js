"use strict";
var nconf = require('nconf');
var Config = (function () {
    function Config() {
        nconf.argv().env().file({ file: "./config.json" });
        this.current = nconf;
    }
    Config.prototype.get = function (key) {
        return this.current.get(key);
    };
    return Config;
}());
exports.Config = Config;
