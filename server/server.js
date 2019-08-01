'use strict';

var express = require('express');
const uuid = require('uuid/v4')
var cors = require('cors');
// var logger = require('morgan');
var mongoose = require('mongoose');

// Express middleware
var bodyParser = require('body-parser');
var session = require('express-session');

var users = require('./routes/users');
var games = require('./routes/games');
var logIn = require('./routes/logIn');
var logOut = require('./routes/logOut');
var signUp = require('./routes/signUp');

var logger = require('./src/lib/logger');

require('dotenv').config();
mongoose.connect(process.env.MONGO_CONNECTION_STR);

var app = express();
const PORT = process.env.PORT || 3000;

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use(session({
  genid: (req) => {
    return uuid(); // use UUIDs for session IDs
  },
  secret: 'bos',
  resave: true,
  saveUninitialized: true
}));

app.use((req, res, next) => {
  logger.info('');
  next();
});

app.use('/api', games);
app.use('/api', users);
app.use('/api', logIn);
app.use('/api', logOut);
app.use('/api', signUp);

app.listen(3000, function() {
  logger.info(`Server is listening on port ${PORT}`);
});
