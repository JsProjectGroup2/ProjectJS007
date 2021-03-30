let express = require('express');
let cors = require('cors');
let mongoose = require('mongoose');
let database = require('./database');
let bodyParser = require('body-parser');

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

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(cors())

app.use('/api',memberAPI)

const port = process.env.PORT || 4000
const server = app.listen(port,()=>{
    console.log('connect to port '+ port);
})