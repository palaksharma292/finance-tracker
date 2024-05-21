// backend/routes/regularAccount.js
const express = require('express');
const router = express.Router();
const {
    createRegularAccount,
    getRegularAccounts,
    getRegularAccountById,
    updateRegularAccount,
    deleteRegularAccount
} = require('../controllers/regularAccountController');
const { protect } = require('../middleware/authMiddleware');

// Route to create a new regular account
router.post('/', protect, createRegularAccount);

// Route to get all regular accounts for the logged-in user
router.get('/', protect, getRegularAccounts);

// Route to get a single regular account by ID
router.get('/:id', protect, getRegularAccountById);

// Route to update a regular account
router.put('/:id', protect, updateRegularAccount);

// Route to delete a regular account
router.delete('/:id', protect, deleteRegularAccount);

module.exports = router;
