'use strict'
var jwt = require('jwt-simple');
var moment = require('moment');

exports.ensureAuthenticated = function (req, res, next) {
    var cookies = req.headers.cookie.split(";");
    let cookie = getJwt(cookies);
    if (!cookie) {
        return res
            .status(403)
            .send({ message: "Tu petición no tiene galletas" });
    }
    var payload = jwt.decode(cookie, "Christian");
    if (payload.exp <= moment().unix()) {
        return res
            .status(401)
            .send({ message: "El token ha expirado" });
    }

    req.user = payload.sub;
    next();
}

function getJwt(array) {
    for (var i = 0; i < array.length; i++) {
        let co = array[i];
        let srh = co.search("jwt=");
        if (srh > 0) {
            let cookie = co.substr(srh + 4, co.length);
            return cookie;
        } else {
            if (i === array.length - 1) {
                return null;
            }
        }

    }
}