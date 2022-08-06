const express = require('express');
const cors = require('cors');
const bodyParser=require('body-parser');
const mongoose =require('mongoose');
const dbConfig=require('./config/database');
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());
mongoose.connect(dbConfig.url,{
    useNewUrlParser:true
}).then(()=>{
    console.log("Database connected successfully")
}).catch(err=>{
    console.log("Not connected with databasew")
})
app.get('/', function(){
    res.send({status: 'test'});
})

var studentRoute=require('./app/routes/student');
var teacherRoute=require('./app/routes/teacher');
var departmentRoute=require('./app/routes/department');
app.use('/',studentRoute);
app.use('/',teacherRoute);
app.use('/',departmentRoute);

app.listen(process.env.PORT | 3000,()=>{
    console.log('Server is listening on port 3000')
})