/// <reference path="IEngine.ts" />

import mongoose = require('mongoose');
import {IEngineModel} from "./IEngine";

var engineSchema = new mongoose.Schema({
    title: String,
    ipin: Number,
    power: Number
});

const engine = mongoose.model<IEngineModel>("Engine", engineSchema);
export = engine;