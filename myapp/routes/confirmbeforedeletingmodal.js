var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
    res.render('confirmbeforedeletingmodal', { title: 'Vipin Kumar Portfolio', msg:''});
  });

module.exports = router;
