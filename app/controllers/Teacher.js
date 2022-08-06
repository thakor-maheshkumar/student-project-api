var TeacherModel = require('../models/teacher');

exports.create = async (req,res)=>{
    if(!req.body.name && !req.body.age){
        res.status(500).send({
            message:'Content can not be empty'
        })
    }
    console.log(req.body)
    var teacher =new TeacherModel({
        name:req.body.name,
        age:req.body.age,
        degree:req.body.degree,
        address:req.body.address
    });
    console.log(teacher);
    await teacher.save().then(data=>{
        res.status(200).json(
            {
                message:'Techer Stored successfully',
                data:teacher
            }
        )
    }).catch(err=>{
        message:err.message
    })
}

exports.findAll = async(req,res)=>{
    try{
        var teachers= await TeacherModel.find();
        res.status(200).json(teachers)
    }catch{
        res.status(500).json({
            message:"Something wrong"
        })
    }
}
exports.findOne = async(req,res)=>{
    try{
        var teachers= await TeacherModel.findById(req.params.id);
        res.status(200).json(teachers)
    }catch{
        res.status(500).json({
            message:"Something wrong"
        })
    }
}

exports.update = async (req,res) => {
    if(!req.body){
        res.status(200).send({
            message:'Content can not be empty'
        })
    }
    var id = req.params.id;
    await TeacherModel.findByIdAndUpdate(id,req.body).then(data=>{
        if(!data){
            res.status(500).send({
                message:'Something wrong'
            })
        }else{
            res.status(200).send({
                message:'Teacher Updated Successfully'
            })
        }
    })
}

exports.delete = async(req,res)=>{
    var id =req.params.id;
    await TeacherModel.findByIdAndRemove(id).then(data=>{
        if(!data){
            res.status(500).json({message:"Something has wrong please try again letter"})
        }else{
            res.status(200).json({message:'Teacher deleted successfully'})
        }
    })
}