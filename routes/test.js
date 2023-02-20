var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res) {
  res.send('response received successfully  ');
});

module.exports = router;
