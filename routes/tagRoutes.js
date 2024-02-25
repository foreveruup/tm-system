const express = require('express');
const router = express.Router();
const createTag = require('../controllers/tags/createTag');
const getAllTags = require('../controllers/tags/getAllTags');
const getSingleTag = require('../controllers/tags/getSingleTag');
const updateTag = require('../controllers/tags/updateTag');
const deleteTag = require('../controllers/tags/deleteTag');

// Маршруты для тегов
router.post('/', createTag);
router.get('/', getAllTags);
router.get('/:id', getSingleTag);
router.put('/:id', updateTag);
router.delete('/:id', deleteTag);

module.exports = router;
