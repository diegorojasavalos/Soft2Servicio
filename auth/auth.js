const jwt = require('jwt-simple');
const moment = require('moment');
const config = require("../config/config.json");
const secret = config.secret;

exports.createToken = function (user) {
    var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, "days").unix(),
    };
    return jwt.encode(payload, secret);
};  