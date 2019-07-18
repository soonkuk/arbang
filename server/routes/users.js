'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.model');

require('dotenv').config();
mongoose.connect(process.env.MONGO_CONNECTION_STR);
/*
var UserSchema = new Schema({
    uid: {type: String, required: true, unique: true},
    hashed_password: {type: String, required: true, 'default':''},
    bos_account: {type: String, required: true, 'default':''}
});
*/
// Get all users
router.get('/users', function(req, res, next) {
  User.find()
    .then(function(data) {
      res.json(data);
    });
});

// Get single user 
router.get('/users/:id', function(req, res, next) {
  var _id = req.params.id;
  User.findById(_id, function(err, data) {
    if (err) {
      res.status(404).send();
    } else {
      res.json(data);
    }
  });
});

// Add new user
router.post('/users', function(req, res, next) {
  req.accepts('application/json');
  var user = {
    uid: req.body.uid,
    password: req.body.password,
    bos_account: req.body.bos_account,
  };

  var data = new User(user);
  data.save(function(err) {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send(data._id);
    }
  });
});

// Delete user
router.delete('/users/:id', function(req, res, next) {
  var _id = req.params.id;
  User.findByIdAndRemove(_id, function(err, data) {
    if (err) {
      res.status(404).send();
    } else {
      res.status(204).send();
    }
  });
});

// Update user
router.put('/users/:id', function(req, res, next) {
  req.accepts('application/json');
  var _id = req.params.id;
  User.findById(_id, function(err, data) {
    if (err) {
      res.status(404).send();
    } else {
      data.uid = req.body.uid;
      data.password = req.body.password;
      data.bos_account = req.body.bos_account;
      data.save();
      res.status(200).json(data);
    }
  });
});

module.exports = router;
