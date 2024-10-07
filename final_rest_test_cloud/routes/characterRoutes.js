const express = require('express');
const router = express.Router();
const { createCharacter, getAllCharacters, getCharacterById, updateCharacter, deleteCharacter, addItemToCharacterInventory } = require('../controllers/characterController');

router.post('/', createCharacter);
router.get('/', getAllCharacters);
router.get('/:id', getCharacterById);
router.put('/:id', updateCharacter);
router.delete('/:id', deleteCharacter);
router.post('/:id/inventory', addItemToCharacterInventory);

module.exports = router;

