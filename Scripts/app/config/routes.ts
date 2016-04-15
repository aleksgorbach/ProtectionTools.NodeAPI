module.exports = (app) => {
    app.get("*", (req, res) => {
        res.redirect("/");
    });

    // POST: api/calc
    app.post("/api/calc", (req, res) => {
        console.log(req.body);
        res.send(req.body);
    });
}
