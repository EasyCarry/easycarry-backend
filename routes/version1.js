var express = require('express');
var router = express.Router();


//importing all the router files
const adminRoutes = require('./admin');
const customerRoutes = require('./customer');

router.use('/admin',adminRoutes);
router.use('/customer',customerRoutes);

module.exports = router;
