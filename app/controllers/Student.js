const { response } = require('express');
var Studentmodel = require('../models/student');

exports.create = async(req,res)=>{
    if(!req.body.name && req.res.rollno){
        res.status(500).send({
            message:'Content can not be empty'
        })
    }

    var student = await new Studentmodel({
        name:req.body.name,
        rollno:req.body.rollno,
        address:req.body.address
    });

    student.save().then(data=>{
        res.status(200).send({
            message:'Student created successfully',
            student:data
        })
    }).catch(err=>{
        res.send({
            message:err.message
        })
    })
}

exports.findAll = async(req,res)=>{
    try{
        var student=await Studentmodel.find();
        console.log(student);
         res.status(200).json(student);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
// exports.findAll = async (req, res) => {
//     try {
//         const user = await Studentmodel.find();
//         res.status(200).json(user);
//     } catch(error) {
//         res.status(404).json({message: error.message});
//     }
// };

exports.findOne = async(req,res)=>{
    var student=await Studentmodel.findById(req.params.id);
    try{
         res.status(200).json(student);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.update =async(req,res)=>{
    if(!req.body){
        return res.status(500).send({
            message:"Content can not be empty"
        })
    }
    var id =req.params.id;
    await Studentmodel.findByIdAndUpdate(id,req.body).then(data=>{
        if(!data){
            res.status(500).json({message:"Something wrong please try again"})
        }else{
            res.status(200).json({message:"Student updated successfully"})           
        }
    })
}

exports.destroy = async(req,res)=>{
    var id=req.params.id;
    await Studentmodel.findByIdAndRemove(id).then(data=>{
        if(!data){
            res.status(500).json({
                message:"Something has wrong"                
            })
        }else{
            res.status(200).send({
                message:"Student deleted successfully"
            })
        }
    })
}