const mongoose = require('mongoose');
const Schema = mongoose.Schema

let memberSchema = new Schema({
    mail:{
        type:String
    },
    tel:{
        type:String
    },
    password:{
        type:String
    },
    package:{
        type:Number,
        default:0
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{
    collection: 'Member'
})

module.exports = mongoose.model('Member',memberSchema)