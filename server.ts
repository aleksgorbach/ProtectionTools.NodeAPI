///<reference path="typings/express/express.d.ts"/>
/// <reference path="typings/mongoose/mongoose.d.ts" />

import { Mongoose } from "./src/server/db/mongoose";
import { Router } from './src/server/config/routes';
import { Config } from "./src/server/config/config"

class App {
    constructor(port: number) {
        var express = require("express"),
            bodyParser = require("body-parser"),
            path = require("path");

        var app = express();
        app.use(bodyParser.json());
        app.use(express.static(path.join(__dirname, "src/client")));
        var router = new Router(app);
        router.route();
        new Mongoose();

        app.listen(port, () => {
            console.log(`server is running http://localhost:${port}`);
        });
    }
}

var config = new Config();
var app = new App(config.get("port"));


