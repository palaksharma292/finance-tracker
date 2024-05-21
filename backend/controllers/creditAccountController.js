// backend/controllers/creditAccountController.js
const CreditAccount = require('../models/CreditAccount');

// Create a new credit account
exports.createCreditAccount = async (req, res) => {
    const { account_name, account_limit, due_date } = req.body;

    try {
        const account = await CreditAccount.create({
            account_name,
            user_id: req.user._id,
            account_limit,
            due_date,
        });

        res.status(201).json(account);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all credit accounts for the logged-in user
exports.getCreditAccounts = async (req, res) => {
    try {
        const accounts = await CreditAccount.find({ user_id: req.user._id });
        res.json(accounts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single credit account by ID
exports.getCreditAccountById = async (req, res) => {
    try {
        const account = await CreditAccount.findById(req.params.id);

        if (account && account.user_id.equals(req.user._id)) {
            res.json(account);
        } else {
            res.status(404).json({ message: 'Account not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a credit account
exports.updateCreditAccount = async (req, res) => {
    const { account_name, account_limit, account_balance, due_date } = req.body;

    try {
        const account = await CreditAccount.findById(req.params.id);

        if (account && account.user_id.equals(req.user._id)) {
            account.account_name = account_name || account.account_name;
            account.account_limit = account_limit !== undefined ? account_limit : account.account_limit;
            account.account_balance = account_balance !== undefined ? account_balance : account.account_balance;
            account.due_date = due_date || account.due_date;

            const updatedAccount = await account.save();
            res.json(updatedAccount);
        } else {
            res.status(404).json({ message: 'Account not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a credit account
exports.deleteCreditAccount = async (req, res) => {
    try {
        const account = await CreditAccount.findById(req.params.id);

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
