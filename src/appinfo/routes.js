const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Model = require('./model');

router.route('')
    .get(function (req, res, next) {
        Model.find({}, function (err, appinfo) {
            if (err) {
                next(err);
            }
            else {
                res.status(200).send({
                    data: appinfo
                });
                console.log("Get Success");
            }
        });
    });


    router.route('')
    .post(function (req, res, next) {
        var record = {
            appId: req.body.appId,
            appName: req.body.appName,
            version: req.body.version
        };

        Model.create(record, function (err, hero) {
            if (err) {
                next(err);
            } else {
                res.status(200).send({
                    message: "Appinfo created successfully."
                })
            }
        })
    });


module.exports = router;