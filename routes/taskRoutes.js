const express = require('express');
const router = express.Router();
const createTask = require('../controllers/tasks/createTask');
const getAllTasks = require('../controllers/tasks/getAllTasks');
const getSingleTask = require('../controllers/tasks/getSingleTask');
const updateTask = require('../controllers/tasks/updateTask');
const deleteTask = require('../controllers/tasks/deleteTask');

router.post('/', createTask);
router.get('/', getAllTasks);
router.get('/:id', getSingleTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
