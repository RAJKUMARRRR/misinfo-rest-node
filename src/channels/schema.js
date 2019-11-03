const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const channelsSchema = new Schema({
    "title": {
        type:String,
        required: true,
        trim: true
    },
    "url": {
        type: String,
        required: true,
        trim: true
    },
    "source": {
        type: String,
        required: true,
        trim: true
    },
    "isnew":{
        type: Boolean
    }
},
{
    timestamps: true
});

//channelsSchema.index({rank:1});
//channelsSchema.index({"Channel name":"text"});


module.exports = channelsSchema;