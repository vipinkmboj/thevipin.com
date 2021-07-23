 //exactly correct one
var express = require('express');
var router = express.Router();
var contactUsModel = require('../modules/contactusschema');
var subscribeModel = require('../modules/subscriptionschema');
// GET home page. */ // exactly correct one
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Vipin Kumar Portfolio', msg:''});
});

// GET home page. */ // exactly correct one
router.get('/contactus', function(req, res, next) {
  
  res.render('index', { title: 'Vipin Kumar Portfolio', msg:''});
});

// GET home page. */ // exactly correct one
router.get('/subscribe', function(req, res, next) {
  
  res.render('index', { title: 'Vipin Kumar Portfolio', msg:''});
});

router.post('/contactus', function(req, res, next) {
  var contactUsDetail = new contactUsModel({
    Firstname: req.body.firstname,
    Lastname: req.body.lastname,
    Mobilenumber: req.body.mobilenumber,
    Email: req.body.email,
    WriteMessage: req.body.writemessage
  });
  contactUsDetail.save((err) => {
    if(err) {
      res.render('index', { title: 'Vipin Kumar Portfolio', msg:'Error Occurred, Please Try again...'});
    }
    res.render('index', { title: 'Vipin Kumar Portfolio', msg:'Message Submited Successfully, You will be contacted soon'});
  });
  
});

router.post('/subscribe', function(req, res, next) {
  var subscriptionDetail = new subscribeModel({
    SubscriptionEmail: req.body.email
  });
  subscriptionDetail.save((err) => {
    if(err) {
      res.render('index', { title: 'Vipin Kumar Portfolio', msg:'Error Occurred, Please Try again...'});
    }
    res.render('index', { title: 'Vipin Kumar Portfolio', msg:'Subscribed Successfully!'});
  });
  
});
module.exports = router;


