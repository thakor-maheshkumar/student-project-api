var express = require('express');
var router=express.Router();
var StudentController = require('../controllers/Student');
router.post('/student-add',StudentController.create);
router.get('/student-list',StudentController.findAll);
router.get('/student-detail/:id',StudentController.findOne);
router.put('/student-update/:id',StudentController.update);
router.delete('/student-delete/:id',StudentController.destroy);

module.exports=router;