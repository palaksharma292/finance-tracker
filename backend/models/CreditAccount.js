// backend/models/CreditAccount.js
const mongoose = require('mongoose');

const CreditAccountSchema = new mongoose.Schema({
    account_id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true,
        required: true,
        index: true,
    },
    account_name: {
        type: String,
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    account_limit: {
        type: Number,
        required: true,
    },
    account_balance: {
        type: Number,
        default: 0,
    },
    due_date: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('CreditAccount', CreditAccountSchema);
