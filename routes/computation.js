
var express = require('express');
  var router = express.Router();
   
  router.get('/', function(req, res, next) {
   if(req.query.x==undefined) {
      value = Math.random();
   }
   else {
      value = req.query.x;
   }
   var result = Math.log(value);
    res.render('computation', { com: `Math.log(${value}) is ${result}` });
  });
   
  module.exports = router;