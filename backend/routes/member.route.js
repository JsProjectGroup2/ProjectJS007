const express = require('express');
const memberRoute = express.Router();

let MemberModel = require('../models/Member');







memberRoute.route('/create-member').post((req,res,next)=>{
    MemberModel.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }
        else{
            res.json(data)
        }
    })
})

module.exports = memberRoute