const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Model = require('./model');
router.route('')
    .get(function (req, res, next) {
        Model.find({}).sort({'createdAt': 'desc'})
        .exec(function (err, channels) {
            if (err) {
                next(err);
            }
            else {
                res.status(200).send({
                    data: channels
                });
                console.log("Get Success");
            }
        });
    });


router.route('')
    .post(function (req, res, next) {
        var record = {
            title: req.body.title,
            url: req.body.url,
            source: req.body.source,
            isnew: req.body.isnew
        };

        Model.create(record, function (err, hero) {
            if (err) {
                next(err);
            } else {
                res.status(200).send({
                    message: "Hero created successfully."
                })
            }
        })
    });

router.route('/:id')
    .put(function (req, res, next) {
        var record = {
            title: req.body.title,
            url: req.body.url,
            source: req.body.source,
            isnew: req.body.isnew
        };

        Model.update({ _id: req.params.id }, record, function (err, hero) {
            if (err) {
                next(err);
            } else {
                res.status(200).send({
                    message: "Hero updated successfully."
                })
            }
        })
    });


    router.route('/:id')
    .delete(function (req, res, next) {
        Model.deleteOne({ _id: req.params.id },  function (err, hero) {
            if (err) {
                next(err);
            } else {
                res.status(200).send({
                    message: "Hero deleted successfully."
                })
            }
        })
    });



module.exports = router;