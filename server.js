"use strict";
var mongoose_1 = require("./src/server/db/mongoose");
var routes_1 = require('./src/server/config/routes');
var config_1 = require("./src/server/config/config");
var App = (function () {
    function App(port) {
        var express = require("express"), bodyParser = require("body-parser"), path = require("path");
        var app = express();
        app.use(bodyParser.json());
        app.use(express.static(path.join(__dirname, "src/client")));
        var router = new routes_1.Router(app);
        router.route();
        new mongoose_1.Mongoose();
        app.listen(port, function () {
            console.log("server is running http://localhost:" + port);
        });
    }
    return App;
}());
var config = new config_1.Config();
var app = new App(config.get("port"));
