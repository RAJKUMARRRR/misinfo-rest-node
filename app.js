const express = require('express');
const http = require('http');
const app = express();
const mongoose = require('mongoose');
const channelsRoutes = require('./src/channels/routes');
const appinfoRoutes = require('./src/appinfo/routes');
const cors = require('cors');
const config = require('./config');
const PORT = config.port;

mongoose.connect(config.mongoUri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.on('error', function (err) {
    console.log("Error connecting mongodb......",err);
});
connection.once('open', function () {
    console.log("DB connected successfully...");
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    app.use('/channels', channelsRoutes);
    app.use('/appinfo', appinfoRoutes);
    app.use(function (err, req, res, next) {
        console.log("Inside error");
        res.send(err.message);
    });
    http.createServer(app).listen(PORT, () => console.log(`Running on port ${PORT}.......`));
});





