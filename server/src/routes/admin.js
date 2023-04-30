const express = require('express');
const router = express.Router();
const JobCategoryController = require('../controllers/JobCategoryController');
const JobTypeController = require('../controllers/JobTypeController');

// job category routes
router.get('/category/list', JobCategoryController.list);
router.post('/category/create', JobCategoryController.create);
router.put('/category/update/:id', JobCategoryController.update);
router.delete('/category/delete/:id', JobCategoryController.delete);

// job type routes
router.get('/type/list', JobCategoryController.list);
router.post('/type/create', JobCategoryController.create);
router.put('/type/update/:id', JobCategoryController.update);
router.delete('/type/delete/:id', JobCategoryController.delete);

// other job routes


module.exports = router;