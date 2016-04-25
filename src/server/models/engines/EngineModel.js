"use strict";
var mongoose = require('mongoose');
var engineSchema = new mongoose.Schema({
    title: String,
    IpIn: Number,
    power: Number
});
var engine = mongoose.model("Engine", engineSchema);
module.exports = engine;
