var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//import session Vipin...
//var session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var basicfrontendpagewithsearchbarRouter = require('./routes/basicfrontendpagewithsearchbar');
var basiccalculatorRouter = require('./routes/basiccalculator');
var responsivenavbarRouter = require('./routes/responsivenavbar');
var frontendjavascriptRouter = require('./routes/frontendjavascript');
var modalpracticeRouter = require('./routes/modalpractice');
var confirmbeforedeletingmodalRouter = require('./routes/confirmbeforedeletingmodal');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// require dot env
/*
require('dotenv').config();
app.use(session({
  secret: process.env.EXPRESS_SESSION_SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));
*/

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/basicfrontendpagewithsearchbar', basicfrontendpagewithsearchbarRouter);
app.use('/basiccalculator', basiccalculatorRouter);
app.use('/responsivenavbar', responsivenavbarRouter);
app.use('/frontendjavascript', frontendjavascriptRouter);
app.use('/modalpractice', modalpracticeRouter);
app.use('/confirmbeforedeletingmodal', confirmbeforedeletingmodalRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
