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
  }).sort({_id:-1});
});

videoRoute.route('/total').get((req,res,next)=>{
  VideoModel.find((error,data)=>{
    if(error){
      return next(error)
    }
    else{
      res.json(data)
    }
  }).sort({view:-1})
})


videoRoute.route("/getvid/:category").get((req, res, next) => {
  VideoModel.find({category:req.params.category},(error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

videoRoute.route("/:id").get((req, res, next) => {
  VideoModel.findById(req.params.id,(error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

videoRoute.route("/update/:id").put((req, res, next) => {
  VideoModel.findByIdAndUpdate(req.params.id,{$set : req.body},(error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

videoRoute.route('/del/:id').delete((req,res,next)=>{
  VideoModel.findByIdAndDelete(req.params.id,(error,data)=>{
    if(error){
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = videoRoute;