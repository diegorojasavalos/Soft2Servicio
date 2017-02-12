const express = require('express');
const index = express.Router();
const ctlIndex = require("../controllers/index");


index.route("/login")
  .post(ctlIndex.login);

index.route("/alltesis")
  .get(ctlIndex.getTesis);

index.route("/infoUser")
  .post(ctlIndex.getInfoUser);

index.route("/changePwd")
  .post(ctlIndex.changePassword);

index.route("/test")
  .get(ctlIndex.test);

module.exports = index;
