'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UserModel = require('../models/User.model');
var BankModel = require('../models/Bank.model');

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
// Get all games
router.post('/login', function(req, res, next) {
  req.accepts('application/json');
  const _uid = req.body.uid;
  const password = req.body.password;
  UserModel.findOne({uid: _uid}, function(err, results) {
    if (err) {
      res.status(404).send(err);
    } else {
      if (results != null) {
        var user = new UserModel({uid: _uid});
        console.log(results._doc);
        var authnticated = user.authenticate(password, results._doc.salt, results._doc.hashed_password);
        if (authnticated) {
          console.log('password correct!');
          BankModel.findOne({uid: _uid}, function(err, results) {
            console.log('find bank data');
            if (err) {
              console.log('User bank record is incorrect');
              res.status(404).send(err);
            } else {
              const json = {
                name: results._doc.uid,
                balance: results._doc.balance,
                auth: true
              };
              res.send(json);
            }
          });
        } else {
          console.log('password not correct!');
          const json = { 
            name: results._doc._uid,
            balance: 0,
            auth: false
          };
          res.send(json);
        }
      }
    }
  });
});

module.exports = router;
