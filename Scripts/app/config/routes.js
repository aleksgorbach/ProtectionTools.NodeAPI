module.exports = function (app) {
    //GET: api/
    app.get("/api", function (req, res) {
        res.json({ message: "API is working" });
    });
    // POST: api/calc
    app.post("/api/calc", function (req, res) {
        console.log(req.body);
        res.send(req.body);
    });
};
//# sourceMappingURL=routes.js.map