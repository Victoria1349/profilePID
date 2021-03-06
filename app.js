var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const favicon = require('serve-favicon');
const mongoose = require('mongoose');
var session = require('express-session');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// connect to DB
mongoose.connect('mongodb+srv://admin:123456v@profilepid-oznsg.mongodb.net/profile-pid?retryWrites=true', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);


//post-requests
app.post('/main', urlencodedParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);

  //res.render('main');
});

// view engine setup
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'template'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());  
app.use(express.static(path.join(__dirname, 'public')));
 
const routes = require('./routes/index');
app.use('/', routes);  

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