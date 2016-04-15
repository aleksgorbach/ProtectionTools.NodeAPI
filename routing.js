/// <reference path="./Scripts/typings/express-serve-static-core/express-serve-static-core.d.ts" />
var Routing;
(function (Routing) {
    var Router = (function () {
        function Router(app) {
            this.app = app;
        }
        Router.prototype.configureRoutes = function () {
            var router = this.app.Router();
            //GET: api/
            router.get("*", function (req, res) {
                res.sendFile("./wwwroot/public/");
            });
            // POST: api/calc
            router.post("/calc", function (req, res) {
                console.log(req.body);
                res.send(req.body);
            });
        };
        return Router;
    })();
    Routing.Router = Router;
})(Routing = exports.Routing || (exports.Routing = {}));
//# sourceMappingURL=routing.js.map