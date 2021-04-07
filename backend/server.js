let express = require('express');
let cors = require('cors');
let mongoose = require('mongoose');
let database = require('./database');
let bodyParser = require('body-parser');
const multer = require('multer');


mongoose.Promise = global.Promise;
mongoose.connect(database.db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Database Connected');
}),error=>{
    console.log('Cannot Connect to database' + error);
}

const memberAPI = require('./routes/member.route');
const videoAPI = require('./routes/video.route');

const upload = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'../public/Thumbnail/');
        },
        filename:(req,file,cb)=>{
            let newfile = file.originalname;
            cb(null,newfile)
        }
    }),
    fileFilter:(req,file,cb)=>{
        if(!file.mimetype.match(/\/(jpg|jpeg|png|gif|webp)$/)){
            return cb(new Error('เฉพาะไฟล์รูปภาพเท่านั้น!'),false)
        }
        cb(null,true)
    }
});


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(cors())

app.use('/api',memberAPI)
app.use('/vidapi',videoAPI)

app.post('/upload',upload.single('file'),(req,res)=>{
    res.json({file:req.file})
})

const port = process.env.PORT || 4000
const server = app.listen(port,()=>{
    console.log('connect to port '+ port);
})

