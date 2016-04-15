/// <reference path="./Scripts/typings/express-serve-static-core/express-serve-static-core.d.ts" />

import core = require("express-serve-static-core");

export namespace Routing {
    export class Router {
        private app: any;

        constructor(app: any) {
            this.app = app;
        }

        public configureRoutes() {
            var router = this.app.Router();
            //GET: api/
            router.get("*", (req, res) => {
                res.sendFile("./wwwroot/public/");
            });

            // POST: api/calc
            router.post("/calc", (req, res) => {
                console.log(req.body);
                res.send(req.body);
            });

        }
    }
}
