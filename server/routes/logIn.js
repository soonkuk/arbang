'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var logger = require('../src/lib/logger');

var User = require('../models/User.model');
var Bank = require('../models/Bank.model');

require('dotenv').config();
mongoose.connect(process.env.MONGO_CONNECTION_STR);

// log in process
router.post('/logIn', function(req, res, next) {
  logger.info('## log in process');

  req.accepts('application/json');
  const _uid = req.body.uid;
  const _password = req.body.password;

  if (req.session.user) {
    // already log in state
    logger.info('already log in state');
  } else {
    User.findOne({uid: _uid}, function(err, results) {
      if (err) {
        res.status(404).send(err);
      } else {
        if (results != null) {
          var user = new User({uid: _uid});
          logger.info(results._doc);
          var authnticated = user.authenticate(_password, results._doc.salt, results._doc.hashed_password);
          if (authnticated) {
            logger.info('password correct!');

            Bank.findOne({uid: _uid}, function(err, results) {
              logger.info('find bank data');
              if (err) {
                logger.info('User bank record is incorrect');
                res.status(404).send(err);
              } else {
                const json = {
                  name: results._doc.uid,
                  balance: results._doc.balance,
                  state: 'logIn'
                };
                req.session.user = {
                  id: _uid,
                  authorized: true
                };
                res.send(json);
              }
            });
          } else {
            logger.info('password not correct!');
            const json = {
              name: results._doc._uid,
              balance: 0,
              auth: 'logOut'
            };
            res.send(json);
          }
        } else {
          logger.info('debugging');
          logger.info(results);
        }
      }
    });
  }
});

module.exports = router;
