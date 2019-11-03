const mongoose = require('mongoose');
const channelsSchema = require('./schema');
const model = mongoose.model('channel',channelsSchema);
module.exports = model;