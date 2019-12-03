var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var v1Routes = require('./routes/version1');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/v1', v1Routes);

module.exports = app;
