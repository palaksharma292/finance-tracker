// backend/controllers/regularAccountController.js
const RegularAccount = require('../models/RegularAccount');

// Create a new regular account
exports.createRegularAccount = async (req, res) => {
    const { account_name } = req.body;

    try {
        const account = await RegularAccount.create({
            account_name,
            user_id: req.user._id,
            account_type: 'regular',
        });

        res.status(201).json(account);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all regular accounts for the logged-in user
exports.getRegularAccounts = async (req, res) => {
    try {
        const accounts = await RegularAccount.find({ user_id: req.user._id });
        res.json(accounts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single regular account by ID
exports.getRegularAccountById = async (req, res) => {
    try {
        const account = await RegularAccount.findById(req.params.id);

        if (account && account.user_id.equals(req.user._id)) {
            res.json(account);
        } else {
            res.status(404).json({ message: 'Account not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a regular account
exports.updateRegularAccount = async (req, res) => {
    const { account_name, account_balance } = req.body;

    try {
        const account = await RegularAccount.findById(req.params.id);

        if (account && account.user_id.equals(req.user._id)) {
            account.account_name = account_name || account.account_name;
            account.account_balance = account_balance !== undefined ? account_balance : account.account_balance;

            const updatedAccount = await account.save();
            res.json(updatedAccount);
        } else {
            res.status(404).json({ message: 'Account not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a regular account
exports.deleteRegularAccount = async (req, res) => {
    try {
        const account = await RegularAccount.findById(req.params.id);

        if (account && account.user_id.equals(req.user._id)) {
            await account.remove();
            res.json({ message: 'Account removed' });
        } else {
            res.status(404).json({ message: 'Account not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
