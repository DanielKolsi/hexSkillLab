var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Serie = require('../models/serie.js');

/* GET ALL SERIES */
router.get('/', function(req, res, next) {
  Serie.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE SERIE BY ID */
router.get('/:id', function(req, res, next) {
  Serie.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE SERIE */
router.post('/', function(req, res, next) {
  Serie.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE SERIE */
router.put('/:id', function(req, res, next) {
  Serie.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE SERIE */
router.delete('/:id', function(req, res, next) {
  Serie.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;