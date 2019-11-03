const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const appInfoSchema = new Schema({
    "appId": {
        type:String,
        required: true
    },
    "appName": {
        type: String,
        required: true
    },
    "version": {
        type: String,
        required: true
    }
});

const model = mongoose.model('appinfo',appInfoSchema);
module.exports = model;
