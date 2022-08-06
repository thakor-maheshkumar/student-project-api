var DepartmentModel = require('../models/department');

exports.create = async(req,res)=>{
    if(!req.body.teacher && !req.body.department){
        res.status(500).send({
            message:"Content can not be empty"
        })
    }
    console.log(req.body.department);
    var department = await new DepartmentModel({
        teacher:req.body.teacher,
        department:req.body.department
    });

     department.save().then(data=>{
        res.status(200).send({
            "Message":"Department created successfully"
        })
    }).catch(err=>{
        message:err.message
    })
}

exports.findAll =async(req,res)=>{
    var department =await DepartmentModel.find().populate("teacher");
    try{
        res.status(200).json(department);
    }catch{
        res.status(500).send({
            message:"Something wrong "
        })
    }
}
exports.edit = async(req,res)=>{
    var department = await DepartmentModel.findById(req.params.id).populate('teacher');
    try{
        res.status(200).json(department);
    }catch{
        res.status(500).json({
          message:"Something wrong"  
        })
    }
}

exports.update = async(req,res)=>{
    if(!req.body){
        res.status(500).send({
            message:'Content can not be empty'
        })
    }
    var id = req.params.id;
    await DepartmentModel.findByIdAndUpdate(id,req.body).then(data=>{
        if(!data){
            res.status(500).send({
                message:'Something wrong'
            })
        }else{
            res.status(200).send({
                message:"Department updated successfully"
            })
        }
    })
}

exports.destroy = async(req,res)=>{
    await DepartmentModel.findByIdAndRemove(req.params.id).then((data)=>{
        if(!data){
            res.status(500).send({
                message:'Something has wrong'
            })
        }else{
            res.status(200).send({
                message:"Succesfully deleted"
            })
        }
    })
}