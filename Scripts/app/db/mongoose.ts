///<reference path="../../typings/mongoose/mongoose.d.ts"/>

import mongoose = require("mongoose");

export class Mongoose {
    private connectionString = "mongodb://localhost/test1";

    private connection;
    
    public connect() {
        mongoose.connect(this.connectionString);
        this.connection = mongoose.connection;
    }
}