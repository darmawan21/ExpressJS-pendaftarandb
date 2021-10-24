var express = require('express');
var router = express.Router();
var Pasiens = require("../models/pasiens");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
