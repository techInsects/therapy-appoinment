'use strict';
var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Doctor = require('../models/doctor');
var patient = require('../models/patient')
var jwt = require('jsonwebtoken');
var ObjectId = require('mongodb').ObjectID;

var passport = require('passport');
require('../config/passport')(passport);
require('../config/doc-passport')(passport);



router.post('/register', function(req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'Please pass username and password.'});
  } else {
    var newUser = new User({
		username: req.body.username,
		password: req.body.password,
		email:req.body.email,
		phone :req.body.phone	

    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});



router.post('/login', function(req, res) {
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), 'secret');
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});



//Registration for Doctor
router.post('/registerDoc', function(req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'Please pass username and password.'});
  } else {
    var newUser = new Doctor({
		username: req.body.username,
		password: req.body.password,
		email:req.body.email,
		phone :req.body.phone	

    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});


//DoctorLogin

router.post('/loginDoc', function(req, res) {
  Doctor.findOne({
    email: req.body.email
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), 'secret');
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});



router.post('/addPatient', function(req, res) {
  if (!req.body.username) {
    res.json({success: false, msg: 'Please pass username and password.'});
  } else {
    var newUser = new patient({
		username: req.body.username,
		email:req.body.email,
    number :req.body.number,	
    address:req.body.address,
    session_name:req.body.session_name,
    session_date:req.body.session_date,
    session_time:req.body.session_time,

    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
  }
});


//Get Patient
router.get('/getPatient', function(req, res) {
 
    patient.find(function (err, data) {
      if (err) throw err;
      res.json(data);
    });
 
});

router.get('/getPatientById/:id', function(req, res) {
 
    patient.find({"_id":ObjectId(req.params.id)},function (err, data) {
      if (err) throw err;
      res.json(data);
    });
 
});


router.get('/getDoctor', function(req, res) {
 
    Doctor.find({},{"username":"$username"},function (err, data) {
      if (err) throw err;
      res.json(data);
    });
 
});



module.exports = router