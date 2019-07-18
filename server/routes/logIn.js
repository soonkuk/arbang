'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UserModel = require('../models/User.model');

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
router.post('/signin', function(req, res, next) {
  req.accepts('application/json');
  const _uid = req.body.uid;
  const password = req.body.password;
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@');
  console.log(_uid);
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
          res.send(results);
        } else {
          console.log('password not correct!');
          res.send('false');
        }
      }
    }
  });
});

module.exports = router;
