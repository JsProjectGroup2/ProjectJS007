const express = require("express");
const videoRoute = express.Router();

let VideoModel = require("../models/Videos");

videoRoute.route("/create-video").post((req, res, next) => {
  VideoModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

videoRoute.route("/").get((req, res, next) => {
  VideoModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

videoRoute.route("/getvid/:category").get((req, res, next) => {
  VideoModel.find({category:req.params.category},(error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = videoRoute;
