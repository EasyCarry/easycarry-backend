

//MONGO DB URI 
module.exports.mongoDbUri = "mongodb+srv://easycarry:easycarry123@cluster0-ntcmj.mongodb.net/easycarry?retryWrites=true&w=majority";
// module.exports.mongoDbUri = "mongodb://192.168.18.14:27017/testing";

//debugging server
module.exports.serverName = "easycarry-bakend:server";

//api response TYPES
module.exports.API_SUCCESS = "SUCCESS";
module.exports.API_ERROR = "ERROR";

//api response template
module.exports.responseTemplate = {
    status: {
        result: this.API_ERROR,
        code: 500,
        detail: "unable to process your request",
        message: "We are facing some issues right now. Please try again later",
        tokenExpired: false
    },
    data: {}
}

//JWT secrets
module.exports.JWT_SECRET = "easy-carry-organization"


