module.exports = (app) => {
    //GET: api/
    app.get("/api", (req, res) => {
        res.json({ message: "API is working" });
    });

    // POST: api/calc
    app.post("/api/calc", (req, res) => {
        console.log(req.body);
        res.send(req.body);
    });
}
