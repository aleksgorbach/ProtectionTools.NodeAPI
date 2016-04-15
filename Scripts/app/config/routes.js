module.exports = function (app) {
    app.get("*", function (req, res) {
        res.redirect("/");
    });
    // POST: api/calc
    app.post("/api/calc", function (req, res) {
        console.log(req.body);
        res.send(req.body);
    });
};
//# sourceMappingURL=routes.js.map