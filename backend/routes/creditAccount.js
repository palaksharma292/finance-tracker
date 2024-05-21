// backend/routes/creditAccount.js
const express = require('express');
const router = express.Router();
const {
    createCreditAccount,
    getCreditAccounts,
    getCreditAccountById,
    updateCreditAccount,
    deleteCreditAccount
} = require('../controllers/creditAccountController');
const { protect } = require('../middleware/authMiddleware');

// Route to create a new credit account
router.post('/', protect, createCreditAccount);

// Route to get all credit accounts for the logged-in user
router.get('/', protect, getCreditAccounts);

// Route to get a single credit account by ID
router.get('/:id', protect, getCreditAccountById);

// Route to update a credit account
router.put('/:id', protect, updateCreditAccount);

// Route to delete a credit account
router.delete('/:id', protect, deleteCreditAccount);

module.exports = router;
