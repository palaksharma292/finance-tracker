// backend/models/RegularAccount.js
const mongoose = require('mongoose');

const RegularAccountSchema = new mongoose.Schema({
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
    account_type: {
        type: String,
        default: 'regular',
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    account_balance: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model('RegularAccount', RegularAccountSchema);
