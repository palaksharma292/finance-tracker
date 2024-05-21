// backend/routes/receipt.js
const express = require('express');
const router = express.Router();
const {
    uploadReceipt,
    viewReceipts,
    viewReceipt,
    deleteReceipt
} = require('../controllers/receiptController');
const { protect } = require('../middleware/authMiddleware');

router.post('/upload', protect, uploadReceipt);
router.get('/view', protect, viewReceipts);
router.get('/:id', protect, viewReceipt);
router.delete('/:id', protect, deleteReceipt);

module.exports = router;