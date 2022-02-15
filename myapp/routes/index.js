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

var aws = require("aws-sdk");
const ses = new aws.SES({"accessKeyId": process.env.SES_I_AM_USER_ACCESS_KEY, "secretAccessKey": process.env.SES_I_AM_USER_SECRET_ACCESS_KEY, "region": process.env.AWS_SES_REGION});

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
    //
    //Send Notification Email
    var email = 'vipinkmboj20@gmail.com';
    var output = `
    <h3>Hi, You have got an message query at thevipin.com</h3>
    <strong>Message Detail: </strong><br/>
    <p>
    Firstname: ${req.body.firstname},<br/>
    Lastname: ${req.body.lastname},<br/>
    Mobilenumber: ${req.body.mobilenumber},<br/>
    Email: ${req.body.email},<br/>
    Message: ${req.body.writemessage}<br/>
    <p>
`;

// exactly correct one for production
let params = {
  // send to list
  Destination: {
      ToAddresses: [
          email
      ]
  },
  Message: {
      Body: {
          Html: {
              Charset: "UTF-8",
              Data: output//"<p>this is test body.</p>"
          },
          Text: {
              Charset: "UTF-8",
              Data: 'Hey, You have received a new Contact Us Message'
          }
      },
      
      Subject: {
          Charset: 'UTF-8',
          Data: "New Contact Us Query Message"
      }
  },
  Source: 'vipinkmboj21@gmail.com', // must relate to verified SES account
  ReplyToAddresses: [
      email,
  ],
};

// this sends the email
ses.sendEmail(params, (err) => {
  if(err) {
    res.render('index', { title: 'Vipin Kumar Portfolio', msg:'Message Submitted Successfully!!'});
  } else {
    res.render('index', { title: 'Vipin Kumar Portfolio', msg:'Message Submited Successfully, You will be contacted soon'});
  }
});
    //
    //res.render('index', { title: 'Vipin Kumar Portfolio', msg:'Message Submited Successfully, You will be contacted soon'});
  });  
});

router.post('/subscribe', function(req, res, next) {
  var subscriptionDetail = new subscribeModel({
    MobileNumber: req.body.mobilenumber,
    SubscriptionEmail: req.body.email
  });
  subscriptionDetail.save((err) => {
    if(err) {
      res.render('index', { title: 'Vipin Kumar Portfolio', msg:'Error Occurred, Please Try again...'});
    }
    //
    //Send Notification Email
    var email = 'vipinkmboj20@gmail.com';
    var output = `
    <h3>Hi, You have got a new subscriber at thevipin.com</h3>
    <strong>Subscription Detail: </strong><br/>
    <p>    
    Email: ${req.body.email}    
    <p>
`;

// exactly correct one for production
let params = {
  // send to list
  Destination: {
      ToAddresses: [
          email
      ]
  },
  Message: {
      Body: {
          Html: {
              Charset: "UTF-8",
              Data: output//"<p>this is test body.</p>"
          },
          Text: {
              Charset: "UTF-8",
              Data: 'Hey, You have a new Subscriber at thevipin.com'
          }
      },
      
      Subject: {
          Charset: 'UTF-8',
          Data: "New Subscriber at thevipin.com"
      }
  },
  Source: 'vipinkmboj21@gmail.com', // must relate to verified SES account
  ReplyToAddresses: [
      email,
  ],
};

// this sends the email
ses.sendEmail(params, (err) => {
  if(err) {
    res.render('index', { title: 'Vipin Kumar Portfolio', msg:'Subscribed Successfully, I ll contact you soon!'});
  } else {
    res.render('index', { title: 'Vipin Kumar Portfolio', msg:'Subscribed Successfully, I ll contact you soon!'});
  }
});

    //
    //res.render('index', { title: 'Vipin Kumar Portfolio', msg:'Subscribed Successfully!'});
  });
  
});
module.exports = router;


