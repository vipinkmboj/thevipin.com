 //exactly correct one
var express = require('express');
var router = express.Router();

// GET home page. */ // exactly correct one
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Quick Website', msg:''});
});

module.exports = router;


