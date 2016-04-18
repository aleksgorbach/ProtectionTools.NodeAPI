﻿///<reference path="Scripts/typings/express/express.d.ts"/>
///<reference path="Scripts/app/config/routes.ts"/>
import routes = require("./Scripts/app/config/routes");

class App {
    constructor(port: number) {
        var express = require("express"),
            bodyParser = require("body-parser"),
            path = require("path");

        var app = express();
        app.use(bodyParser.json());
        app.use(express.static(path.join(__dirname, "wwwroot/public")));
        var router = new routes.Router(app);
        router.route();

        var usedPort = process.env.port || port;
        app.listen(port, () => {
            console.log(`server is running http://localhost:${usedPort}`);
        });
    }
}

var app = new App(1337);


