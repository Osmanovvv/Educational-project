var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/tc2024')
var session = require("express-session")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var servers = require("./routes/servers");

var app = express();

// view engine setup
app.engine('ejs',require('ejs-locals')); 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "Servers",
  cookie: { 
    maxAge: 60 * 1000, // Время жизни cookie (1 минута)
    httpOnly: false    // Разрешить доступ к cookie через `document.cookie`
  },
  proxy: true,         // Если вы используете обратный прокси (например, nginx)
  resave: true,        // Пересохранять сессии даже без изменений
  saveUninitialized: true // Сохранять пустые сессии
}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/servers', servers);

// app.use('/', servers);
// app.use('/servers', servers);
// app.use('/users', usersRouter);

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
  res.render('error');res.render('error',{title: 'Server'}); 
});

module.exports = app;
