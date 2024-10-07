const Character = require('../models/character'); // Add this to the top of itemController.js
const Item = require('../models/item');

// Create a new item
const createItem = async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).send(item);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Get all items from the database
const getAllItems = async (req, res) => {
    try {
        const items = await Item.find({});
        res.status(200).send(items);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Get an item by code
const getItemByCode = async (req, res) => {
    try {
        console.log('Searching for item with code:', req.params.code);
        const item = await Item.findOne({ code: req.params.code });
        if (!item) return res.status(404).send({ message: 'Item not found' });
        res.status(200).send(item);
    } catch (error) {
        console.log('Could not get item of code: ', req.params.code);
        res.status(500).send({ message: error.message });
    }
};

// Get item by mongoDB id
const getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).send({ message: 'Item not found' });
        res.status(200).send(item);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = { createItem, getAllItems, getItemByCode, getItemById };

