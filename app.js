//express routing stuff
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var test = require('./routes/test');
var questionnaire = require('./routes/questionnaire');
var activities = require('./routes/activities');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', test)
app.use('/questionnaire', questionnaire)
app.use('/activities', activities)

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

// // Import the functions you need from the SDKs you need
// var initializeApp = require("firebase/app").initializeApp;
// var getFirestore = require("firebase/firestore").getFirestore;

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAUxKG_G25JEcQKAKbiymyKHeRf1Y8ihwA",
//   authDomain: "memind-c2101.firebaseapp.com",
//   projectId: "memind-c2101",
//   storageBucket: "memind-c2101.appspot.com",
//   messagingSenderId: "386267628146",
//   appId: "1:386267628146:web:45b44767eef2e2cc42b8eb",
//   measurementId: "G-HMZ9YELZGZ"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(firebaseApp);

// app.firebaseDB = db;

module.exports = app;
