const Character = require('../models/character');
const Item = require('../models/item');

// Create a new character
const createCharacter = async (req, res) => {
    try {
        const character = new Character(req.body);
        await character.save();
        res.status(201).json(character);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all characters
const getAllCharacters = async (req, res) => {
    try {
        const characters = await Character.find();
        res.json(characters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific character by ID
const getCharacterById = async (req, res) => {
    try {
        const character = await Character.findById(req.params.id);
        if (!character) return res.status(404).json({ message: 'Character not found' });
        res.json(character);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a character
const updateCharacter = async (req, res) => {
    try {
        const character = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!character) return res.status(404).json({ message: 'Character not found' });
        res.json(character);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Add item to a character's inventory by code
const addItemToCharacterInventory = async (req, res) => {
    try {
        const { code, quantity } = req.body;

        // Check if the item exists by its code
        const item = await Item.findOne({ code: code });
        if (!item) return res.status(404).send({ message: 'Item not found' });

        // Find the character by its ID
        const character = await Character.findById(req.params.id);
        if (!character) return res.status(404).send({ message: 'Character not found' });

        // Add the item to the character's inventory using the code
        character.inventory.push({ itemCode: code, quantity: quantity });

        await character.save();
        res.status(200).send(character);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};



// Delete a character
const deleteCharacter = async (req, res) => {
    try {
        const character = await Character.findByIdAndDelete(req.params.id);
        if (!character) return res.status(404).json({ message: 'Character not found' });
        res.json({ message: 'Character deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createCharacter, getAllCharacters, getCharacterById, updateCharacter, deleteCharacter, addItemToCharacterInventory };

