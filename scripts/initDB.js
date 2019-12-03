/**
 * This file is used to initiliaze the mongo database
 * creates all the basic setup for the database
 */

require("../db/database");

var User = require('../models/user');


function init() {

    let admin = new User({ username: "admin", password: "1155" });

    admin.save().then(user => {
        console.log("New admin " + user.username + " created");
        process.exit();
    })
}

init()

