var express = require('express');
var router = express.Router();

// Initialize variables
var sum = 0;
var more = 0;

// Define the route
router.get('/', function(req, res, next) {
  more += 1;
  sum += more;
  res.send(`Sum is: ${sum}`);
});

module.exports = router;