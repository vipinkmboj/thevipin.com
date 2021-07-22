 //exactly correct one
var express = require('express');
var router = express.Router();
var contactUsModel = require('../modules/contactusschema');
// GET home page. */ // exactly correct one
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Quick Website', msg:''});
});

// GET home page. */ // exactly correct one
router.get('/contactus', function(req, res, next) {
  
  res.render('index', { title: 'Quick Website', msg:''});
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
      res.render('index', { title: 'Quick Website', msg:'Error Occurred, Please Try again...'});
    }
    res.render('index', { title: 'Quick Website', msg:'Message Submited Successfully, You will be contacted soon'});
  });
  
});
module.exports = router;


