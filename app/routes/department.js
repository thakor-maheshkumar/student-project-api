var express = require('express');
var router = express.Router();

var DepartmentController = require('../controllers/Department');

router.post('/department-add',DepartmentController.create);
router.get('/department-list',DepartmentController.findAll);
router.get('/department-edit/:id',DepartmentController.edit);
router.put('/department-update/:id',DepartmentController.update);
router.delete('/department-delete/:id',DepartmentController.destroy);
module.exports=router;