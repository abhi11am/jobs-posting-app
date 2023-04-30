const express = require('express');
const router = express.Router();
const JobCategoryController = require('../controllers/JobCategoryController');
const JobTypeController = require('../controllers/JobTypeController');
const JobController = require('../controllers/JobController');

// job category routes
router.get('/job/category/list', JobCategoryController.list);
router.post('/job/category/create', JobCategoryController.create);
router.put('/job/category/update/:id', JobCategoryController.update);
router.delete('/job/category/delete/:id', JobCategoryController.delete);

// job type routes
router.get('/job/type/list', JobTypeController.list);
router.post('/job/type/create', JobTypeController.create);
router.put('/job/type/update/:id', JobTypeController.update);
router.delete('/job/type/delete/:id', JobTypeController.delete);

// job routes
router.get('/job/list', JobController.list);
router.get('/job/:id', JobController.get);
router.post('/job/create', JobController.create);
router.delete('/job/delete/:id', JobController.delete);

// 



module.exports = router;