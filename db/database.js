
const mongoose = require('mongoose');
const {mongoDbUri,serverName} = require('../constants/config')
const debug = require('debug')(serverName)

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect( mongoDbUri ,{useNewUrlParser : true , useUnifiedTopology : true,useCreateIndex :true})
       .then(() => {
         debug("Successfully connected to DB ");
       })
       .catch(err => {
         debug("Error connecting to database");
       })
  }
}

module.exports = new Database()