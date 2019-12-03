const constants = require("../constants/config");
var Users = require("../models/user");

module.exports.login = async (req, res) => {

    //Sample response 
    let response = Object.assign({}, constants.responseTemplate);

    //extracting payload
    let {
        username = "",
        password = ""
    } = req.body;

    try {

        if (!username || !password) {
            response.status.code = 400;
            response.status.detail = "username or password empty";
            response.status.message = "Invalid username or password given";
            return res.status(response.status.code).json(response);
        }
        
        let userData = await Users.findOne({ username }).exec();

        if (!userData || ! await userData.comparePassword(password)) {
            response.status.code = 404;
            response.status.detail = "Username not found or password invalid";
            response.status.message = "Invalid username or password given";
            return res.status(response.status.code).json(response);
        }

        let token = userData.generateAuthToken();
        
        response.status.code = 200;
        response.status.detail = "Login successfull";
        response.status.message = "Logging in...";
        response.status.result = constants.API_SUCCESS;
        response.data = {token};

        return res.status(response.status.code).json(response);

    } catch (error) {
        response.status.code = 500;
        response.status.detail = error.message;
        return res.status(response.status.code).json(response);
    }
}