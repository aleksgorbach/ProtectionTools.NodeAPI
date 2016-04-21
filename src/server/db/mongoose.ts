///<reference path="../../../typings/mongoose/mongoose.d.ts"/>

import mongoose = require("mongoose");
import {Config} from "../config/config";

export class Mongoose {
    private connection: mongoose.Connection;
    private config: Config;
    
    constructor(){
        this.config = new Config();
        this.connect();
    }
      
    private connect() {
        mongoose.connect(this.config.get("mongoose:uri"));
        this.connection = mongoose.connection;
        this.connection.on("error", (err) => {
            console.error(err);
        })
        this.connection.once("open", () => {
            console.log("connected to db");
        })
    }
}