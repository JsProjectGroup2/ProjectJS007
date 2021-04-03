const express = require("express");
const memberRoute = express.Router();

let MemberModel = require("../models/Member");

memberRoute.route("/create-member").post((req, res, next) => {
  MemberModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

memberRoute.route("/login/:mail/:password").post((req, res, next) => {
  MemberModel.findOne({
    mail: req.params.mail,
    password: req.params.password,
  },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    })
});

memberRoute.route("/:mail").post((req, res, next)=>{
  MemberModel.findOne({
    mail: req.params.mail,
  },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    })
});

module.exports = memberRoute;
