var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var passport = require('passport');
var http = require("http");
var api = require('./routes/api');
var morgan = require('morgan');



var app = express();
var db;
//Database connection
const dburi  = "mongodb+srv://m220student:m220password@cluster0-mg8s6.mongodb.net/hospital"
mongoose.connect(dburi, function (err, database) {
  if (err) {
    console.log("Error connecting to db!");
  } else {
    console.log("connected to db" + 3000);
    db = database;
  }
});




app.use(morgan('dev'));
app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({'extended':'false'}));




app.use('/api', api);

app.use(express.static(path.join(__dirname, 'build')));

app.use('/home', express.static(path.join(__dirname, 'build')));
app.use('/session', express.static(path.join(__dirname, 'build')));
app.use('/teletalk', express.static(path.join(__dirname, 'build')));
app.use('/ebook', express.static(path.join(__dirname, 'build')));
app.use('/activity', express.static(path.join(__dirname, 'build')));
app.use('/team', express.static(path.join(__dirname, 'build')));
app.use('/mission', express.static(path.join(__dirname, 'build')));
app.use('/contactus', express.static(path.join(__dirname, 'build')));
app.use('/doctorLogin', express.static(path.join(__dirname, 'build')));
app.use('/RegistrationDoc', express.static(path.join(__dirname, 'build')));
app.use('/login', express.static(path.join(__dirname, 'build')));
app.use('/Registration', express.static(path.join(__dirname, 'build')));




app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Iam an Error Please First Remove me Then??' + err.stack)
})







module.exports = app;




















