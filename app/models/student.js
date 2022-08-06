var mongoose = require('mongoose');

var schema= new mongoose.Schema({
    name:{
        required:true,
        type:String,
    },
    rollno:{
        required:true,
        type:String,
    },
    address:{
        required:true,
        type:String,
    },
});

var student=new mongoose.model('Student',schema);
module.exports=student;