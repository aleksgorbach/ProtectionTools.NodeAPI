///<reference path="../../typings/express/express.d.ts"/>
/// <reference path="../../typings/mongoose/mongoose.d.ts" />

import { Mongoose } from "./db/mongoose";
import { Router } from './config/routes';
import { Config } from "./config/config"

class App {
    constructor(port: number) {
        var express = require("express"),
            bodyParser = require("body-parser"),
            path = require("path");

        var app = express();
        app.use(bodyParser.json());
        app.use(express.static(path.join(__dirname, "../client")));
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


