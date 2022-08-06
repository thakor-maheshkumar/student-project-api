var express=require('express');

var router=express.Router();

var TeacherController = require('../controllers/Teacher');
router.get('/teacher-list',TeacherController.findAll);
router.post('/teacher-add',TeacherController.create);
router.get('/teacher-edit/:id',TeacherController.findOne);
router.put('/teacher-update/:id',TeacherController.update);
router.delete('/teacher-delete/:id',TeacherController.delete);

module.exports=router;