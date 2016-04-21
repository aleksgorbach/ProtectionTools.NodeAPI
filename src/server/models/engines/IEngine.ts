/// <reference path="../../../../typings/mongoose/mongoose.d.ts" />
import mongoose = require('mongoose');

export interface IEngine {
    Title: string;
    IpIn: number;
    Power: number;
}

export interface IEngineModel extends IEngine, mongoose.Document {
}