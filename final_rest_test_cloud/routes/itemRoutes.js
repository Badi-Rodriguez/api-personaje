const express = require('express');
const router = express.Router();
const { createItem, getAllItems, getItemByCode, getItemById } = require('../controllers/itemController');
const characterRoutes = require('./characterRoutes');

// Route to create a new item
router.post('/', createItem);

// Route to get all items
router.get('/', getAllItems);

// Route to get an item by code
router.get('/code/:code', getItemByCode);

// Route to get an item by MongoDB ID
router.get('/:id', getItemById);

module.exports = router;
