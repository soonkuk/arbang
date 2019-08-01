'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var logger = require('../src/lib/logger');

require('dotenv').config();
mongoose.connect(process.env.MONGO_CONNECTION_STR);

router.post('/logOut', function(req, res, next) {
  logger.info('## log Out process');

  req.accepts('application/json');
  if (req.session.user) {
  // log in state
    logger.info('log out');
    const json = {
      name: req.session.id,
      state: 'logout'
    };
    req.session.destroy(function(err) {
      if (err) {throw err;}
      logger.info('session destroyed and log out');
      res.send(json);
    });
  } else {
    // not log in state
    logger.info('not log in state');
    const json = {
      state: 'logout'
    };
    res.send(json);
  }
});

module.exports = router;
