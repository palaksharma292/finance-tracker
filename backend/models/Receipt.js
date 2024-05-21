//backend/models/Receipt.js
const mongoose = require('mongoose');

const receiptSchema = new mongoose.Schema({
    transactionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Transaction'
    },
    image: {
        type: String, // Assuming the image is stored as a URL or base64 string
        required: true
    }
});

const Receipt = mongoose.model('Receipt', receiptSchema);

module.exports = Receipt;
