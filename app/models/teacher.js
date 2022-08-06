var mongoose =require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:String,
    },
    degree:{
        type:String,
    },
    address:{
        type:String
    }
});

var teacher = new mongoose.model('Teacher',schema);

module.exports=teacher;