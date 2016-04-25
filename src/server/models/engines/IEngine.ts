/// <reference path="../../../../typings/mongoose/mongoose.d.ts" />
import mongoose = require('mongoose');

export interface IEngine {
    title: string;
    IpIn: number;
    power: number;
}

export interface IEngineModel extends IEngine, mongoose.Document {
}