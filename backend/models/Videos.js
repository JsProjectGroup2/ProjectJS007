const mongoose = require('mongoose');
const Schema = mongoose.Schema

let videoSchema = new Schema({
    thumbnail:{
        type:String
    },
    name:{
        type:String
    },
    score:{
        type:String
    },
    des:{
        type:String
    },
    category:{
        type:String
    },
    videolink:{
        type:String
    },
    view:{
        type:Number
        ,default:0
    },
    year:{
        type:String
    }

},{
    collection: 'Video'
})

module.exports = mongoose.model('Video',videoSchema)