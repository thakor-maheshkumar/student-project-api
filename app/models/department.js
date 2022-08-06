var mongoose =require('mongoose');

var schema = new mongoose.Schema({
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Teacher",
        required:true    
    },
    department:{
        type:String,
        required:true
    }
})

var department = new mongoose.model('Department',schema);
module.exports=department;