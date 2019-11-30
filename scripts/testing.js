const mongoose = require('mongoose');
require("../db/database")

var connection = mongoose.connection

var products = connection.db.collection("products");

console.log(products.findOne())



