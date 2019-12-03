var express = require('express');
var router = express.Router();
var adminController = require('../controllers/admin');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',adminController.login);


module.exports = router;
