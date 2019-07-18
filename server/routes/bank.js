'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bank = require('../models/Bank.model');

require('dotenv').config();
mongoose.connect(process.env.MONGO_CONNECTION_STR);
/*
var GameSchema = new Schema({
    title: {type: String, required: true},
    genre: {type: String, required: true},
    desc: {type:String, required: true},
    image_uri: {type: String, required: true},
    thumb_uri: {type: String, required: true},
    game_url: {type: String, required: false},
    popularity: {type: Number, default: 0}
    },
    {versionKey: false}
);
*/
// Get all accounts
router.get('/bank', function(req, res, next) {
  Bank.find()
    .then(function(data) {
      res.json(data);
    });
});

// Get account
router.get('/bank/:id', function(req, res, next) {
  var _uid = req.params.id;
  Bank.findOne({uid: _uid}, function(err, data) {
    if (err) {
      res.status(404).send();
    } else {
      res.json(data);
    }
  });
});

// Add new account
router.post('/bank', function(req, res, next) {
  req.accepts('application/json');
  var bank = {
    uid: req.body.uid,
    balance: req.body.balance,
    bos_account: req.body.bos_account,
  };

  var data = new Bank(bank);
  data.save(function(err) {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send(data.uid);
    }
  });
});

// Delete account
router.delete('/bank/:id', function(req, res, next) {
  var _uid = req.params.id;
  Bank.findOneAndRemove({uid: _uid}, function(err, data) {
    if (err) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
});

// Update account balance
router.put('/bank/:id', function(req, res, next) {
  req.accepts('application/json');
  var _uid = req.params.id;
  Bank.findOneAndUpdate({uid: _uid}, {balance: req.body.balance}, function(err, data) {
    if (err) {
      res.status(404).send();
    } else {
      res.status(200).send();
    }
  });
});

module.exports = router;
